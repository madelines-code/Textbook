# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# require 'faker'
# Subject.destroy_all

# Topic.destroy_all don;t need this because dependent: :destroy in model

mat = Subject.create(subject: "Mathematics")
sci = Subject.create(subject: "Science")
eng = Subject.create(subject: "English")
his = Subject.create(subject: "History")

alg1 = mat.courses.create( course_code: "MAT101", course_name: "Algebra I" )
alg2 = mat.courses.create( course_code: "MAT102", course_name: "Algrbra II" )
calc1 = mat.courses.create( course_code: "MAT103", course_name: "Calculus I" )


# could also create with our item model (need store_id)
# fl.items.create(name:'Nike', price: 99, description: 'just do it')
bio = Course.create( course_code: "SCI101", course_name: "Intro to Biology", subject_id: sci.id )
env = Course.create( course_code: "SCI102", course_name: "Environmental Science", subject_id: sci.id )

lit1 = eng.courses.create( course_code: "ENG101", course_name: "English Literature I" )
lit2 = eng.courses.create( course_code: "ENG102", course_name: "English Literature II" )

amr = his.courses.create( course_code: "HIS101", course_name: "American History" )
wld = his.courses.create( course_code: "HIS102", course_name: "World History" )


1.times do
  author = Faker::Name.name
  price = Faker::Commerce.price(range: 0..200.0, as_string: false) 
  alg1.books.create(title: "How to Do Algebra", author: "#{author}", price: "#{price}" )
  alg1.books.create(title: "Algebra Tricks", author: "#{author}", price: "#{price}" )
  alg2.books.create(title: "How to Do More Algebra", author: "#{author}", price: "#{price}" )
  alg2.books.create(title: "WHy Algebra Matters", author: "#{author}", price: "#{price}" )
  calc1.books.create(title: "Basics of Calculus", author: "#{author}", price: "#{price}" )
  calc1.books.create(title: "Math is Hard", author: "#{author}", price: "#{price}" )
  bio.books.create(title: "Biology Basics", author: "#{author}", price: "#{price}" )
  bio.books.create(title: "About Living Things", author: "#{author}", price: "#{price}" )
  env.books.create(title: "The Earth and Human Impact", author: "#{author}", price: "#{price}" )
  env.books.create(title: "Sustainable Ways of Doing Stuff", author: "#{author}", price: "#{price}" )
  amr.books.create(title: "The Founding of America", author: "#{author}", price: "#{price}" )
  amr.books.create(title: "What Happened Out West", author: "#{author}", price: "#{price}" )
  wld.books.create(title: "All the Countries: A Short History", author: "#{author}", price: "#{price}" )
  wld.books.create(title: "What A World, What A World", author: "#{author}", price: "#{price}" )
end
