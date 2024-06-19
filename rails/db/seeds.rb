# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
ActiveRecord::Base.transaction do
  island_quiz_pack = IslandQuizPack.create!

  Article.create!(question: "", correct: "", island_quiz_pack: island_quiz_pack)
  Article.create!(question: "", correct: "", island_quiz_pack: island_quiz_pack)
end
