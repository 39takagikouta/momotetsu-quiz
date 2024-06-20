class Api::V1::LakeQuizPacksController < ApplicationController
  def index
    lake_quiz_packs = LakeQuizPack.all
    render json: lake_quiz_packs
  end
end
