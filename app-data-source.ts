import { createClient } from '@supabase/supabase-js'
import { DataSource } from 'typeorm'
import { config } from 'dotenv'

config()

const supabaseUrl = process.env.SUPABASE_URL || ''
const supabaseKey = process.env.SUPABASE_KEY || ''
const supabasePassword = process.env.SUPABASE_PASSWORD || ''
const supabase = createClient(supabaseUrl, supabaseKey)

export const myDataSource = new DataSource({
  type: 'postgres',
  host: '',
  port: 5432,
  username: '',
  password: supabasePassword,
  database: 'postgres',
  entities: ['./src/entity/customer.entity.ts'],
  logging: true,
  synchronize: true
})

export { supabase }
