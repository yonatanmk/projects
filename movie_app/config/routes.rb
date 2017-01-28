Rails.application.routes.draw do
  devise_for :users
  root "movies#index"
  resources :movies, only: :index
  namespace :api do
    namespace :v1 do
      resources :movies
    end
  end
  namespace :api do
    namespace :v1 do
      resources :users
    end
  end
  get '*path', to: 'movies#index' # allows you to refresh the page, cant have other rails pages

end
