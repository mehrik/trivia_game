Login and logout.

Display all the games played with complete information: name of user, score, percentage. Search feature should also be implemented here.

Ability to add a new question. Form should have validation

Have at least 5 questions saved in the database. When users play, randomly pick 3 questions from the database.

For the game (test), have a validation that would check if there is an answer for each for the question.

You must be able to deploy your work to Amazon EC2 and provide the IP address or subdomain/domain name to where your work has been deployed. Please note that Heroku deployment is not honored.

Models:
    user:
        name - minlength 2

    game:
        _user
        score min 0, max 3
        percentage? 

    Question
        content - minlength 15
        correctAnswer - minlength 2
        fakeAnswer1 - minlength 2
        fakeAnswer2 - minlength 2

Controllers:
    users:
        create

    games:
        index
        create - after game has been completed


    questions:
        index
        create

Front end:
    Login popup?
        user.create

    dashboard.html:
        game.index - table, order by score

    lets_play.html:
        games form
        games.create
        questions.index, display 3

    new_question.html:
        question.create