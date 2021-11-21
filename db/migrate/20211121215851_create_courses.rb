class CreateCourses < ActiveRecord::Migration[6.1]
  def change
    create_table :courses do |t|
      t.string :course_code
      t.string :course_name
      t.belongs_to :subject, null: false, foreign_key: true

      t.timestamps
    end
  end
end
