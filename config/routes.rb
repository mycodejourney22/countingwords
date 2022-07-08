Rails.application.routes.draw do
  root to: "countwords#index"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  resources :countwords, only: [:new, :create, :show]
end
