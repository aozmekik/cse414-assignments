This assignment is not a group assignment. 
You have to solve them by yourself.
 You have to solve the questions on a paper, not a word document.
 Take the photo of the paper and upload it to the assignment in our moodle page.

A Park consists of Woods, which consist of a collection of Wood-Sections
each has a number of specific species of trees.

You can access everywhere by Roads. The woods also has a Manager. 

There are Fire-Stations in the park.
Each one monitors fires in the Park.

There are Facilities which consists of  camps and offices in the park.

There are also Rivers. 
Each river supply water to a different facility. 


Abswer the questions using the text above.

1-    (20 points) Draw the E-R diagram of the park.


2-    (20 points) Give all the functional dependencies in the question.


3-    (20 points)


a-Give all the relations that holds the criterias of Boyce-Codd Normal Form, if there is any. 
Explain three of them why they are in Boyce-Codd Normal Form, give your reasons and proofs in details.
 (If there isn’t any relations that satisfy the criteria of Boyce-Codd Normal Form, then just write it.)


	All of my tables and relations holds the criterias of 3NF since there are no transative dependencies and they are already in 2NF form.
	Also they are already in BCNF so that means they must be in 3NF.

	1 - fire_id -> assigned_station_ID,wood_section_ID,start_date
	Here fire_id is a superkey and each attribute contained in R
	2 - wood_ID -> park_ID,manager_ID
	Here wood_ID is a superkey and each attribute contained in R
	3 - station_ID -> facility_id,station_name
	Here station_ID is a superkey and each attribute contained in R

b- Give all the relations that does not hold the criterias of Boyce-Codd Normal Form, if there is any. 
Explain three of them why they are not in Boyce-Codd Normal Form, give your reasons and proofs in details.  
(If there isn’t any relations, then just write it.)

-------There arent any relations that does not hold BCNF criterias.


4-(20 points)

a-Give all the relations that holds the criterias of 3NF, if there is any. 
Explain three of them why they are in 3NF, give your reasons and proofs in details. 
(If there isn’t any relations that satisfy the criteria of 3NF, then just write it.)

	All of my tables and relations holds the criterias of 3NF since there are no transative dependencies and they are already in 2NF form.
	Also they are already in BCNF so that means they must be in 3NF.

	1 - fire_id -> assigned_station_ID,wood_section_ID,start_date
	Here fire_id is a superkey and each attribute contained in R
	2 - wood_ID -> park_ID,manager_ID
	Here wood_ID is a superkey and each attribute contained in R
	3 - station_ID -> facility_id,station_name
	Here station_ID is a superkey and each attribute contained in R

b-Give all the relations that does not hold the criterias of 3NF, if there is any. 
Explain three of them why they are not in 3NF, give your reasons and proofs in details. 
(If there isn’t any relations, then just write it.)

--------There arent any relations that does not hold 3NF criterias.