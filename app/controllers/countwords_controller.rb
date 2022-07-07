class CountwordsController < ApplicationController

  def new
    @countword = Countword.new
  end

  def create
    @countword = Countword.new(wordparams)
    if @countword.save
      redirect_to new_countword_path
    else
      render :new, status: :unprocessable_entity
    end
  end

  private

  def wordparams
    params.require(:countword).permit(:words)
  end
end
