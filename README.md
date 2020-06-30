

Robot as an onject, has its position, orientation and action

Envionment constrain: Table size = 5x5 units. Robot position should not exist coordinate X > 4, X < 0 , Y > 4 , Y < 0

Contiton: Move 1 unit step once a time. 90deg rotation step. 

Implementation: Only 4 possible direction, directoin is aline to axis, no floating point calculation needed, no triangulation calcoulation needed.

Step1: Creat Robot Class that simulate robot moves on table on given action.
Step2: Add enviromemt constrain to robot.
Step3: Implement user command input.
Step4: parse command to robot action.
Step5: Error handling on command input.
