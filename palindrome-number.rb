# https://leetcode.com/problems/palindrome-number/submissions/

def is_palindrome(integer)
  characters = integer.to_s.split("")
  length = characters.length
  
  search = true
  index = 0
  
  while search && (index + 1) <= (length) / 2.0 do
    puts "#{index}: #{characters[index]}=#{characters[-(index + 1)]}"
    if characters[index] == characters[-(index + 1)]
      puts "match"
      index += 1
    else
      puts "no match"
      search = false
    end
  end
  puts "sol: #{search}"
  search
end


is_palindrome(122)