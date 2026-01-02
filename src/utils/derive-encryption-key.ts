import { hkdf } from '@panva/hkdf'

/**
 * Derives the encryption key used by NextAuth.js for JWE encryption
 * This matches the internal key derivation that NextAuth uses
 *
 * @param secret - The AUTH_SECRET from environment variables
 * @param keyLength - Key length in bytes (32 for A256GCM, 64 for A256CBC-HS512)
 * @returns The derived encryption key
 */
async function getDerivedEncryptionKey(
  enc: string,
  keyMaterial: Parameters<typeof hkdf>[1],
  salt: Parameters<typeof hkdf>[2]
) {
  let length: number
  switch (enc) {
    case "A256CBC-HS512":
      length = 64
      break
    case "A256GCM":
      length = 32
      break
    default:
      throw new Error("Unsupported JWT Content Encryption Algorithm")
  }
  return await hkdf(
    "sha256",
    keyMaterial,
    salt,
    `Auth.js Generated Encryption Key (${salt})`,
    length
  )
}

/**
 * Convert key to JWK (JSON Web Key) format
 * This is the standard format for symmetric keys in JWT/JWE contexts
 */
function toJWK(keyBytes: Uint8Array) {
  // Determine algorithm based on key length
  const alg = keyBytes.length === 64 ? 'A256CBC-HS512' : 'A256GCM'

  return {
    kty: 'oct',  // Key type: octet sequence (symmetric key)
    k: Buffer.from(keyBytes).toString('base64url'),  // Key value in base64url
    alg,  // Algorithm based on key length
    use: 'enc',  // Key usage: encryption
    key_ops: ['encrypt', 'decrypt']  // Key operations
  }
}

/**
 * Utility to output the derived key for use in other services
 * Run this script to get the encryption key for your dogecoiner-api
 */
export async function outputDerivedKey() {
  const secret = process.env.AUTH_SECRET

  // The salt is the cookie name - NextAuth uses this in the key derivation
  // For development/HTTP: 'authjs.session-token'
  // For production/HTTPS: '__Secure-authjs.session-token'
  const cookieName = process.env.SESSION_COOKIE_NAME

  if (!secret) {
    throw new Error('AUTH_SECRET environment variable is required')
  }
  
  const derivedKey = await getDerivedEncryptionKey("A256CBC-HS512", secret, cookieName)
  const base64Key = Buffer.from(derivedKey).toString('base64')
  const hexKey = Buffer.from(derivedKey).toString('hex')
  const jwk = toJWK(derivedKey)

  console.log('=== NextAuth Derived Encryption Key ===')
  console.log('\nUsing cookie name (salt):', cookieName)
  console.log('\nBase64:', base64Key)
  console.log('\nJWK:')
  console.log(JSON.stringify(jwk, null, 2))
  console.log('\nKey Length:', derivedKey.byteLength, 'bytes (', derivedKey.byteLength * 8, 'bits )')
  console.log('\nUse this key in your dogecoiner-api to decrypt NextAuth JWE tokens')

  return { base64Key, hexKey, jwk, derivedKey }
}

// Export the getDerivedEncryptionKey function for use in other scripts
export { getDerivedEncryptionKey }