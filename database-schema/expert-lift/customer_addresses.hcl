table "customer_addresses" {
  schema = schema.expert_lift
  
  column "id" {
    null = false
    type = uuid
    default = sql("gen_random_uuid()")
  }
  
  column "customer_id" {
    null = false
    type = uuid
    comment = "Reference to customer"
  }
  
  column "address_id" {
    null = false
    type = uuid
    comment = "Reference to address"
  }
  
  column "is_primary" {
    null = false
    type = boolean
    default = false
    comment = "Whether this is the primary address for the customer"
  }
  
  column "created_at" {
    null = false
    type = timestamptz
    default = sql("now()")
  }
  
  column "updated_at" {
    null = false
    type = timestamptz
    default = sql("now()")
  }
  
  primary_key {
    columns = [column.id]
  }
  
  foreign_key "customer_addresses_customer_fk" {
    columns     = [column.customer_id]
    ref_columns = [table.customers.column.id]
    on_update   = CASCADE
    on_delete   = CASCADE
  }
  
  foreign_key "customer_addresses_address_fk" {
    columns     = [column.address_id]
    ref_columns = [table.addresses.column.id]
    on_update   = CASCADE
    on_delete   = CASCADE
  }
  
  index "customer_addresses_customer_idx" {
    columns = [column.customer_id]
  }
  
  index "customer_addresses_address_idx" {
    columns = [column.address_id]
  }
  
  index "customer_addresses_unique_pair" {
    unique = true
    columns = [column.customer_id, column.address_id]
    comment = "Ensure one relationship per customer-address pair"
  }
}