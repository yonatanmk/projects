Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "folders#index"
  resources :folders, only: [:index, :create] do
    resources :notes, only: [:index, :create, :update, :destroy]
  end
  resources :notes, only: [:index, :create, :update, :destroy]
end
