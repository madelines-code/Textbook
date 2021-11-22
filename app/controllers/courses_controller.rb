class CoursesController < ApplicationController
  before_action :set_subject
  before_action :set_course, only: [:show, :update, :destroy, :edit]

  # get 'stores/:store_id/items'
  # return items for a given store
  def index
    render component: "Courses", props: { subject: @subject, courses: @subject.courses }
  end

  # # GET	/stores/:store_id/items/:id
  # show a single item
  def show
    render component: "Course", props: { course: @course, subject: @subject, books: @course.books}
  end

  # get '/stores/:store_id/items/new'
  # render form to create a new item
  def new
    # in neo notes (not needed rails/erb thing)
    # what we really need here is the id of the store
    # we would need @item if we are doing error handling
    # @item = @store.items.new
    render component: "NewCourse", props: { subject: @subject }
  end

  # post 'stores/:store_id/items'
  def create
    #create new item in memory(not db)
    @course = @subject.courses.new(course_params)
    if (@course.save)
      #these two are the same (takes us to topic show page)
      redirect_to [@subject, @course]
      # redirect_to store_item_path(@store, @item)
    else
      #TODO ERROR HANDLING
    end
  end

  
  # return form to edit item
  def edit
    render component: "EditCourse", props: { subject: @subject, course: @course }
  end

  # put/patch 'stores/:store_id/items/:id'
  # update item
  def update
    if (@course.update(course_params))
      redirect_to [@subject, @course]
    else
      #TODO ERROR HANDLING
    end
  end


  # delete a single item
  def destroy
    @course.destroy
    redirect_to subject_courses_path(@subject)
  end

  private

  def course_params
    params.require(:course).permit(:course_name, :course_code )
  end

  def set_subject
    @subject = Subject.find(params[:subject_id])
  end

  def set_course
    # this way is better, because it is only going to search
    # the given store's items
    @course = @subject.courses.find(params[:id])
  end
end
