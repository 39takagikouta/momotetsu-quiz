class Api::V1::CountryQuizPacksController < ApplicationController
  def index
    country_quiz_packs = CountryQuizPack.all
    render json: country_quiz_packs
  end
end
