Rails.application.routes.draw do
  devise_for :users
  root "movies#index"
  resources :movies, only: :index
  namespace :api do
    namespace :v1 do
      resources :movies
    end
  end
  get '*path', to: 'movies#index' # allows you to refresh the page

end
