import { config } from 'dotenv'
import { resolve } from 'path'
import { outputDerivedKey } from '../src/utils/derive-encryption-key'

// Load environment variables from .env.local
const envPath = resolve(__dirname, '..', '.env.development')
console.log('Loading env from:', envPath)
config({ path: envPath })

// Run this script to generate the encryption key for dogecoiner-api
outputDerivedKey().catch(console.error)
