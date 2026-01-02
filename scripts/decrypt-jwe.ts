import { config } from 'dotenv'
import { resolve } from 'path'
import { readFileSync, existsSync } from 'fs'
import { jwtDecrypt } from 'jose'
import { getDerivedEncryptionKey } from '../src/utils/derive-encryption-key'

// Load environment variables
const envPath = resolve(__dirname, '..', '.env.development')
config({ path: envPath })

async function decryptJWE(jweToken: string) {
  const secret = process.env.AUTH_SECRET

  // The salt is the cookie name - NextAuth uses this in the key derivation
  // For development/HTTP: 'authjs.session-token'
  // For production/HTTPS: '__Secure-authjs.session-token'
  const cookieName = process.env.SESSION_COOKIE_NAME

  if (!secret) {
    throw new Error('AUTH_SECRET environment variable is required')
  }

  // First, let's peek at the header to see what algorithm is being used
  const headerPart = jweToken.trim().split('.')[0]
  try {
    const decodedHeader = JSON.parse(Buffer.from(headerPart, 'base64url').toString())
    console.log('JWE Header:', JSON.stringify(decodedHeader, null, 2))
    console.log('')
  } catch (e) {
    console.log('Could not decode header')
  }

  try {
    // Derive the encryption key (same as NextAuth does internally)
    const encryptionKey = await getDerivedEncryptionKey('A256CBC-HS512', secret, cookieName)

    console.log('Using cookie name (salt):', cookieName)
    console.log('Derived key length (bytes):', encryptionKey.byteLength)
    console.log('Derived key length (bits):', encryptionKey.byteLength * 8)
    console.log('')

    // Decrypt the JWE token
    const { payload, protectedHeader } = await jwtDecrypt(jweToken.trim(), encryptionKey, {
      clockTolerance: 15,
    })

    console.log('=== JWE Decrypted Successfully ===\n')
    console.log('Protected Header:')
    console.log(JSON.stringify(protectedHeader, null, 2))
    console.log('\nPayload:')
    console.log(JSON.stringify(payload, null, 2))

    return { payload, protectedHeader }
  } catch (error) {
    console.error('Failed to decrypt JWE:', error.message)
    throw error
  }
}

// Get JWE token from command line argument (either direct string or filename)
const input = process.argv[2]

if (!input) {
  console.error('Usage: npm run decrypt-jwe <token-or-filename>')
  console.error('\nExamples:')
  console.error('  npm run decrypt-jwe "eyJhbGciOiJkaXIi..."')
  console.error('  npm run decrypt-jwe token.txt')
  process.exit(1)
}

let jweToken: string

// Check if input is a file path
if (existsSync(input)) {
  console.log(`Reading token from file: ${input}\n`)
  jweToken = readFileSync(input, 'utf-8')
} else {
  jweToken = input
}

decryptJWE(jweToken).catch((error) => {
  console.error('Error:', error.message)
  process.exit(1)
})