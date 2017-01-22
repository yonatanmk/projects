Rails.application.routes.draw do
  devise_for :users
  root "movies#index"
  resources :movies

  namespace :api do
    namespace :v1 do
      resources :movies
    end
  end
end
