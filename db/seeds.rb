# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


seed_multiplier = 1

(1*seed_multiplier).times do 
  Location.create(  {
    photo_name: "first_photo",
    character_name: "Waldo",
    left: 158,
    top: 146
    })
end
