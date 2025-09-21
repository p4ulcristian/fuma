function "normalize_address_search" {
  schema = schema.expert_lift
  lang   = PLpgSQL
  return = trigger
  as = <<-EOF
  BEGIN
      NEW.search_normalized := translate(
          lower(
              COALESCE(NEW.name, '') || ' ' ||
              COALESCE(NEW.address_line1, '') || ' ' ||
              COALESCE(NEW.address_line2, '') || ' ' ||
              COALESCE(NEW.city, '') || ' ' ||
              COALESCE(NEW.country, '') || ' ' ||
              COALESCE(NEW.contact_person, '')
          ),
          'áéíóöőúüű',
          'aeiooouuu'
      );
      RETURN NEW;
  END;
  EOF
  comment = "Normalize Hungarian characters in address search text"
}

trigger "update_address_search_normalized" {
  on = table.addresses
  before {
    insert = true
    update = true
  }
  execute {
    function = function.normalize_address_search
  }
  comment = "Automatically update search_normalized column on address changes"
}