Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
root "subjects#index"
resources :subjects

resources :subjects do
  resources :courses
end

resources :courses do
  resources :books
end 

end
