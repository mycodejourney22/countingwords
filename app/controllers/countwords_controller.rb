class CountwordsController < ApplicationController

  def index
    @countword = Countword.new
  end

end
