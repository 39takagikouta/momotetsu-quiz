class Api::V1::IslandQuizPacksController < ApplicationController
  def index
    island_quiz_packs = IslandQuiz.all
    render json: island_quiz_packs
  end
end
