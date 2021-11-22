class BooksController < ApplicationController
  before_action :set_course
  before_action :set_book, only: [:show, :update, :destroy, :edit]

  # get '/items/:item_id/comments'
  # return comments for a given item
  def index
    render component: "Books", props: { course: @course, books: @course.books }
  end

  # # GET	/stores/:store_id/items/:id
  # show a single item
  def show
    render component: "Book", props: { book: @book, course: @course}
  end

  # # get '/stores/:store_id/items/new'
  # # render form to create a new item
  def new
    # in neo notes (not needed rails/erb thing)
    # what we really need here is the id of the store
    # we would need @item if we are doing error handling
    # @item = @store.items.new
    render component: "NewBook", props: { course: @course }
  end

  # # post 'stores/:store_id/items'
  def create
    #create new comment in memory(not db)
    @book = @course.books.new(book_params)
    if (@book.save)
      #these two are the same (takes us to topic show page)
      redirect_to [@course, @book]
      # redirect_to item_comment_path(@item, @comment)
    else
      #TODO ERROR HANDLING
    end
  end

# get 'stores/:store_id/items/:id/edit'
# return form to edit item
  def edit
    render component: "EditBook", props: { course: @course, book: @book }
  end

# put/patch 'stores/:store_id/items/:id'
# update item
  def update
    if (@book.update(book_params))
      redirect_to [@course, @book]
    else
      #TODO ERROR HANDLING
    end
  end

  # DELETE	/stores/:store_id/items/:id
  # delete a single item
  def destroy
    @book.destroy
    redirect_to course_books_path(@course)
  end

  private

  def book_params
    params.require(:book).permit(:title, :author, :price)
  end

  def set_course
    @course = Course.find(params[:course_id])
  end

  def set_book
    # this way is better, because it is only going to search
    # the given item's comments
    @book = @course.books.find(params[:id])
    # also do it this way
    # @item = Item.find(params[:id])
  end
end
