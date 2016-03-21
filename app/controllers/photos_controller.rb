class PhotosController < ApplicationController

  def index
    @photos = Photo.all
    @location = Location.first
    puts 'im here'
    puts @location
    
    respond_to do |format|
      format.html
      format.json{render :json => @location, :status => 200}
    end
  end
  
end
