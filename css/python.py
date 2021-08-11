# from time import sleep

# target_time = 10
# def up_timer(secs):
#   for i in range(0,secs):
#     print(i)
#     sleep(1)
#   print("時間です！")

# up_timer(target_time)

import random
answer = random.randint(1,10)
count = 0

while True:
    print("your guess?", end="")
    guess = int(input())
    count += 1
    if answer == guess:
        print("Bingo! it took %i guesses!" %count)
        break
    elif answer > guess:
        print("Biggre!")
    else:
        print("Smaller!")

# print("Answer: %i" %answer)


# print("あなたが選んだ数値に３を足しました⇨" number + 3)
