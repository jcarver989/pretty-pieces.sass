require 'erb'
include ERB::Util

TEMPLATE_FILE = File.join("examples", "examples.html.erb")
OUTPUT_FILE = File.join("examples", "examples.html")


def button(classes)
  "<a href='#' class='#{classes} button'>Button!</a>"
end

def build
  colors = %w{purple blue gray dark-gray red green}
  sizes = %w{mega large medium small micro}
  p colors
  File.open(OUTPUT_FILE, 'w') do |f|
    f.syswrite ERB.new(File.read(TEMPLATE_FILE)).result(binding)
  end
end

while true
  begin
    puts "building"
    build()
    puts "sleeping"
    sleep 5
  rescue
    p $! 
    retry
  end
end
