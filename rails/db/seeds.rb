# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
ActiveRecord::Base.transaction do
  island_quiz_pack = IslandQuizPack.create!

  IslandQuiz.create!(question_url: "/エルズミーア島.webp", correct: "エルズミーア島", island_quiz_pack: island_quiz_pack)
  IslandQuiz.create!(question_url: "/カリマンタン島.webp", correct: "カリマンタン島", island_quiz_pack: island_quiz_pack)
  IslandQuiz.create!(question_url: "/キューバ島.webp", correct: "キューバ島", island_quiz_pack: island_quiz_pack)
  IslandQuiz.create!(question_url: "/グレートブリテン島.webp", correct: "グレートブリテン島", island_quiz_pack: island_quiz_pack)
  IslandQuiz.create!(question_url: "/シチリア島.webp", correct: "シチリア島", island_quiz_pack: island_quiz_pack)
  IslandQuiz.create!(question_url: "/スマトラ島.webp", correct: "スマトラ島", island_quiz_pack: island_quiz_pack)
  IslandQuiz.create!(question_url: "/セイロン島.webp", correct: "セイロン島", island_quiz_pack: island_quiz_pack)
  IslandQuiz.create!(question_url: "/ニューギニア島.webp", correct: "ニューギニア島", island_quiz_pack: island_quiz_pack)
  IslandQuiz.create!(question_url: "/バフィン島.webp", correct: "バフィン島", island_quiz_pack: island_quiz_pack)
  IslandQuiz.create!(question_url: "/ビクトリア島.webp", correct: "ビクトリア島", island_quiz_pack: island_quiz_pack)
  IslandQuiz.create!(question_url: "/プーケット島.webp", correct: "プーケット島", island_quiz_pack: island_quiz_pack)

  IslandOption.create!(name: "エルズミーア島")
  IslandOption.create!(name: "カリマンタン島")
  IslandOption.create!(name: "キューバ島")
  IslandOption.create!(name: "グレートブリテン島")
  IslandOption.create!(name: "シチリア島")
  IslandOption.create!(name: "スマトラ島")
  IslandOption.create!(name: "セイロン島")
  IslandOption.create!(name: "ニューギニア島")
  IslandOption.create!(name: "バフィン島")
  IslandOption.create!(name: "ビクトリア島")
  IslandOption.create!(name: "プーケット島")

end
