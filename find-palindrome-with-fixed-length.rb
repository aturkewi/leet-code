# @param {Integer[]} queries
# @param {Integer} int_length
# @return {Integer[]}
def kth_palindrome(queries, int_length)
  starting_number = get_starting_number(int_length)
  puts "Starting number: #{starting_number}"
  queries.map do |query|
      if valid?(query, starting_number)
          first_half = starting_number + (query - 1)
          generate_number(first_half, int_length)
      else
          -1
      end
  end
end

def valid?(query, starting_number)
  # fancier way is to get the log or something
  max_num = starting_number.to_s.gsub("1", "9").gsub("0", "9").to_i
  # power = Math.log(starting_number).to_i
  # max_num = (10 ** (power + 1)) - 1
  max_num >= (starting_number + (query - 1))
end

def get_starting_number(int_length)
  zero_count = (int_length - 1) / 2
  starting_number = 1 * 10 ** zero_count
end

def generate_number(first_half, int_length)
  if int_length == 1
      first_half
  elsif int_length.odd?
      left = first_half / 10
      pivot = first_half % 10
      (left.to_s + pivot.to_s + left.to_s.reverse).to_i
  else
      (first_half.to_s + first_half.to_s.reverse).to_i
  end
end