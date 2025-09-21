table "customers" {
  schema = schema.expert_lift
  
  column "id" {
    null = false
    type = uuid
    default = sql("gen_random_uuid()")
  }
  
  column "name" {
    null = false
    type = varchar(200)
    comment = "Customer company name"
  }
  
  column "email" {
    null = true
    type = varchar(255)
    comment = "Primary contact email"
  }
  
  column "phone" {
    null = true
    type = varchar(50)
    comment = "Primary contact phone"
  }
  
  column "contact_person" {
    null = true
    type = varchar(200)
    comment = "Main contact person name"
  }
  
  column "notes" {
    null = true
    type = text
    comment = "Additional notes about the customer"
  }
  
  column "active" {
    null = false
    type = boolean
    default = true
  }
  
  column "workspace_id" {
    null = false
    type = uuid
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
  
  foreign_key "customers_workspace_fk" {
    columns     = [column.workspace_id]
    ref_columns = [table.workspaces.column.id]
    on_update   = CASCADE
    on_delete   = CASCADE
  }
  
  index "customers_name_idx" {
    columns = [column.name]
  }
  
  index "customers_workspace_idx" {
    columns = [column.workspace_id]
  }
}