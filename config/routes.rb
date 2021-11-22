Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
root "subjects#index"
get "/subjects/new", to: "subjects#new"
post "/subjects", to: "subjects#create"
get "/subjects/:id", to: "subjects#show"
get "/subjects/:id/edit", to: "subjects#edit"
post "/subjets/:id", to: "subjects#update"
delete "/subjects/:id", to: "subjects#destroy"

resources :subjects do
  resources :courses
end


resources :courses do
  resources :books
end 

end
