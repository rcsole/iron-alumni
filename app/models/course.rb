class Course < ActiveRecord::Base
  has_many :member_course_relations
  has_many :members, through: :member_course_relations
  validates :course_type, inclusion: { in: %w(web mobile), message: "%{value} is not a registered type, please edit your model" }
  validates :city, inclusion: { in: %w(barcelona madrid miami), message: "%{value} is not a registered city, please edit your model" }
  validate :start_date_before_end_date

  private
  def start_date_before_end_date
    if start_date.to_i > end_date.to_i
      errors.add(:start_date, 'The initial date has to be before the end date')
    end
  end
end