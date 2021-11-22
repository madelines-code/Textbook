class SubjectsController < ApplicationController
  def index

    render component: "Subjects", props: {subjects: Subject.all}
  end
# render componenet : "file looking for", props (information you are sending) :{how you are going to refer to the info: Infomation you are sending (ususally fromm a model)}
  def show
    
    # find subject
    # render subject
    render component: "Subject", props: {subject: (find_subject), courses: (find_subject.courses)}
  end

  #(C)reate
  def new
    # render new form
    render component: "NewSubject"
  end

  def create
    # create store to our db
    Subject.create(subject: params[:subject][:subject])
    redirect_to root_path
  end

 # (U)pdate
  # edit returns the form to user/client
  def subjects_params
    params.require(:subjects).permit(:subject)
  end

 def edit
  render component: "EditSubject", props: { subject: (find_subject) }
end


# # # update takes values from form and updates the record
def update
  if (find_subject).update(subjects_params)
    # this will take us to our index method
    redirect_to root_path
  else
    render component: "EditSubject", props: { subject: (find_subject) }
  end
end

  #(D)elete
  def destroy
    # find subject to Delete
    # Delete
    # add delete button to subject and subjects pages
    (find_subject).destroy
    redirect_to root_path
  end


#   private

  def find_subject
    @subject = Subject.find(params[:id])
  end



end
