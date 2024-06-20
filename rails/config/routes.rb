Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get "health_check", to: "health_check#index"
      resources :country_quiz_packs, only: [:index]
      resources :lake_quiz_packs, only: [:index]
      resources :island_quiz_packs, only: [:index]
    end
  end
  post "auth/:provider/callback", to: "api/v1/users#create"
end
