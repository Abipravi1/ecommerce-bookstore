function filtercomic(data) {
	document.querySelector('#comic').className = 'cat';
	document.querySelector('#navel').className = 'cat';
	document.querySelector('#prod').className = 'cat';
	document.querySelector('#fan').className = 'cat';
	document.querySelector('#horror').className = 'cat';
	document.querySelector('#adv').className = 'cat';

	if (data === 'comic') {
		document.querySelector('#comic').className += ' active';
		document.querySelector('#bookslist').innerHTML = `<div class="bookcard p-3">
                <img src="./comic/Fun home (comic).jpeg" alt="fun home comic" />
                <div class="d-flex flex-column gap-3 m-3">
                    <p class="h5 text-dark">Fun Home</p>
                    <p class="h6 text-muted">An unusual memoir done in the form of a graphic novel by a cult favorite
                        comic artist offers a darkly funny family portrait that details her relationship with her father
                    </p>
                    <div class="d-flex flex-row">
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                    </div>
                </div>
                <div class="d-flex flex-column gap-3">
                    <p class="h5 text-dark">Rs.800</p>
                    <button class="btn btn-outline-dark" onclick="basket('Fun Home', '800')">Add To Cart</button>
                </div>
            </div>
            <div class="bookcard p-3">
                <img src="./comic/nimona.jpeg" alt="Nimona" />
                <div class="d-flex flex-column gap-3 m-3">
                    <p class="h5 text-dark">Nimona</p>
                    <p class="h6 text-muted">Nimona is an impulsive young shape-shifter with a knack for villainy. Lord
                        Ballister Blackheart is a villain with a
                        vendetta. As sidekick and supervillain, Nimona and Lord Blackheart are about to wreak some
                        serious havoc.
                    </p>
                    <div class="d-flex flex-row">
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                    </div>
                </div>
                <div class="d-flex flex-column gap-3">
                    <p class="h5 text-dark">Rs.1250</p>
                    <button class="btn btn-outline-dark" onclick="basket('Nimona', '1250')">Add To Cart</button>
                </div>
            </div>
            <div class="bookcard p-3">
                <img src="./comic/nona the ninth.jpg" alt="nona" />
                <div class="d-flex flex-column gap-3 m-3">
                    <p class="h5 text-dark">None The Ninth</p>
                    <p class="h6 text-muted">Strega Nona is a story about punishment, authority, and trust. Strega Nona
                        is a witch who helps villagers with their
                        troubles. She employs a young man named Big Anthony to help her with her chores.
                    </p>
                    <div class="d-flex flex-row">
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                    </div>
                </div>
                <div class="d-flex flex-column gap-3">
                    <p class="h5 text-dark">Rs.750</p>
                    <button class="btn btn-outline-dark" onclick="basket('None The Ninth', '750')">Add To Cart</button>
                </div>
            </div>
            <div class="bookcard p-3">
                <img src="./comic/saga vol 1.jpeg" alt="nona" />
                <div class="d-flex flex-column gap-3 m-3">
                    <p class="h5 text-dark">Saga</p>
                    <p class="h6 text-muted">classic fantasy mesh in setting a sprawling stage for an intensely personal
                        story of two lovers, cleverly narrated by
                        their newborn daughter.
                    </p>
                    <div class="d-flex flex-row">
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                    </div>
                </div>
                <div class="d-flex flex-column gap-3">
                    <p class="h5 text-dark">Rs.300</p>
                    <button class="btn btn-outline-dark" onclick="basket('Saga', '300')">Add To Cart</button>
                </div>
            </div>`;
	} else if (data === 'navel') {
		document.querySelector('#navel').className += ' active';
		document.querySelector(
			'#bookslist',
		).innerHTML = `  <div class="bookcard p-3">
                <img src="./navel/The Bible Repairman and Other Stories.jpg"
                    alt="The Bible Repairman and Other Stories" />
                <div class="d-flex flex-column gap-3 m-3">
                    <p class="h5 text-dark">The Bible Repairman and Other Stories</p>
                    <p class="h6 text-muted">Gathering darkly fantastic short fiction previously available only in
                        limited editions, this collection explores the
                        mysteries of souls—whether they are sacrificed on the pinnacle of Mount Parnassus or lodged in a
                        television cable box.
                    </p>
                    <div class="d-flex flex-row">
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                    </div>
                </div>
                <div class="d-flex flex-column gap-3">
                    <p class="h5 text-dark">Rs.800</p>
                    <button class="btn btn-outline-dark" onclick="basket('The Bible Repairman and Other Stories', '800')">Add To Cart</button>
                </div>
            </div>
            <div class="bookcard p-3">
                <img src="./navel/the Navel of god.jpg" alt="the Navel of god" />
                <div class="d-flex flex-column gap-3 m-3">
                    <p class="h5 text-dark">The Navel of god</p>
                    <p class="h6 text-muted">Zack Peters savors the perks associated with being the President's Science
                        Advisor and a reputation as one of
                        Washington's most eligible bachelors.
                    </p>
                    <div class="d-flex flex-row">
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                    </div>
                </div>
                <div class="d-flex flex-column gap-3">
                    <p class="h5 text-dark">Rs.1250</p>
                    <button class="btn btn-outline-dark" onclick="basket('The Navel of god', '1250')">Add To Cart</button>
                </div>
            </div>
            <div class="bookcard p-3">
                <img src="./navel/the novel of the moon.jpeg" alt="the navel of moon" />
                <div class="d-flex flex-column gap-3 m-3">
                    <p class="h5 text-dark">The Noval of the Moon</p>
                    <p class="h6 text-muted">Vicenta (“Vicky”) Lumière has moved beyond her upbringing in the diverse
                        Irish Chan­nel neighborhood of New Orleans.But
                        a visit to her childhood friend Lonnie Cavanaugh in the Louisiana Correctional Institute for
                        Women brings back a flood
                        of memories.In Navel of the Moon
                    </p>
                    <div class="d-flex flex-row">
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                    </div>
                </div>
                <div class="d-flex flex-column gap-3">
                    <p class="h5 text-dark">Rs.750</p>
                    <button class="btn btn-outline-dark" onclick="basket('The Noval of the Moon', '750')">Add To Cart</button>
                </div>
            </div>
            <div class="bookcard p-3">
                <img src="./navel/the navel of the world.jpeg" alt="Navel" />
                <div class="d-flex flex-column gap-3 m-3">
                    <p class="h5 text-dark">The Navel of the World</p>
                    <p class="h6 text-muted">At the end of summer school, Benjamin was given one task—find his missing
                        brothers. Should be easy right? But Benjamin
                        can't locate a trace of them anywhere.
                    </p>
                    <div class="d-flex flex-row">
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                    </div>
                </div>
                <div class="d-flex flex-column gap-3">
                    <p class="h5 text-dark">Rs.300</p>
                    <button class="btn btn-outline-dark" onclick="basket('The Navel of the World', '300')">Add To Cart</button>
                </div>
            </div>`;
	} else if (data === 'prod') {
		document.querySelector('#prod').className += ' active';
		document.querySelector(
			'#bookslist',
		).innerHTML = ` <div class="bookcard p-3">
                <img src="./selfdev/4 hour deep work.jpeg" alt="$ hourdeep Work" />
                <div class="d-flex flex-column gap-3 m-3">
                    <p class="h5 text-dark">4 Hour deep work</p>
                    <p class="h6 text-muted">Forget the old concept of retirement and the rest of the deferred-life
                        plan–there is no need to wait and every reason
                        not to, especially in unpredictable economic times.
                    </p>
                    <div class="d-flex flex-row">
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                    </div>
                </div>
                <div class="d-flex flex-column gap-3">
                    <p class="h5 text-dark">Rs.800</p>
                    <button class="btn btn-outline-dark" onclick="basket('4 Hour deep work', '800')">Add To Cart</button>
                </div>
            </div>
            <div class="bookcard p-3">
                <img src="./selfdev/5 am club.webp" alt="5am" />
                <div class="d-flex flex-column gap-3 m-3">
                    <p class="h5 text-dark">5 Am Club</p>
                    <p class="h6 text-muted">Part manifesto for mastery, part playbook for genius-grade productivity and
                        part companion for a life lived beautifully,
                        the 5 am club is a work that will transform your life.
                    </p>
                    <div class="d-flex flex-row">
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                    </div>
                </div>
                <div class="d-flex flex-column gap-3">
                    <p class="h5 text-dark">Rs.1250</p>
                    <button class="btn btn-outline-dark" onclick="basket('5 Am Club', '1250')">Add To Cart</button>
                </div>
            </div>
            <div class="bookcard p-3">
                <img src="./selfdev/atomic habits.jpeg" alt="Atomic Habits" />
                <div class="d-flex flex-column gap-3 m-3">
                    <p class="h5 text-dark">Atomic Habits</p>
                    <p class="h6 text-muted">No matter your goals, Atomic Habits offers a proven framework for
                        improving--every day. James Clear, one of the world's
                        leading experts on habit formation, reveals practical strategies that will teach you exactly how
                        to form good habits
                    </p>
                    <div class="d-flex flex-row">
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                    </div>
                </div>
                <div class="d-flex flex-column gap-3">
                    <p class="h5 text-dark">Rs.750</p>
                    <button class="btn btn-outline-dark" onclick="basket('Atomic Habits', '750')">Add To Cart</button>
                </div>
            </div>
            <div class="bookcard p-3">
                <img src="./selfdev/think and grow rich.jpeg" alt="think and grow rich" />
                <div class="d-flex flex-column gap-3 m-3">
                    <p class="h5 text-dark">Think and Grow Rich</p>
                    <p class="h6 text-muted">Think and Grow Rich has earned itself The reputation of being considered a
                        textbook for actionable techniques that can
                        help one get better at doing anything, not just by rich and wealthy, but also by people doing
                        wonderful work in their
                        respective fields
                    </p>
                    <div class="d-flex flex-row">
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                    </div>
                </div>
                <div class="d-flex flex-column gap-3">
                    <p class="h5 text-dark">Rs.300</p>
                    <button class="btn btn-outline-dark" onclick="basket('Think and Grow Rich', '300')">Add To Cart</button>
                </div>
            </div>`;
	} else if (data === 'fan') {
		document.querySelector('#fan').className += ' active';
		document.querySelector('#bookslist').innerHTML = `<div class="bookcard p-3">
                <img src="./fantasy/game of thrones.webp" alt="game of thrones" />
                <div class="d-flex flex-column gap-3 m-3">
                    <p class="h5 text-dark">Game of Thrones</p>
                    <p class="h6 text-muted">Full of drama and adventure, rage and lust, mystery and romance, George
                        R.R. Martin's 'Game of Thrones: Song of Fire and
                        Ice🥶 (Book I) is regarded as one of the most intriguing and greatest epic of the modern era.
                    </p>
                    <div class="d-flex flex-row">
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                    </div>
                </div>
                <div class="d-flex flex-column gap-3">
                    <p class="h5 text-dark">Rs.800</p>
                    <button class="btn btn-outline-dark" onclick="basket('Game of Thrones', '800')">Add To Cart</button>
                </div>
            </div>
            <div class="bookcard p-3">
                <img src="./fantasy/name of the wind.jpeg" alt="name of the wind" />
                <div class="d-flex flex-column gap-3 m-3">
                    <p class="h5 text-dark">Name of the wind</p>
                    <p class="h6 text-muted">The intimate narrative of his childhood in a troupe of traveling players,
                        his years spent as a near-feral orphan in a
                        crime-ridden city, his daringly brazen yet successful bid to enter a legendary school of magic,
                    </p>
                    <div class="d-flex flex-row">
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                    </div>
                </div>
                <div class="d-flex flex-column gap-3">
                    <p class="h5 text-dark">Rs.1250</p>
                    <button class="btn btn-outline-dark" onclick="basket('Name of the wind', '1250')">Add To Cart</button>
                </div>
            </div>
            <div class="bookcard p-3">
                <img src="./fantasy/six of crows.webp" alt="six of crows" />
                <div class="d-flex flex-column gap-3 m-3">
                    <p class="h5 text-dark">Six of Crows</p>
                    <p class="h6 text-muted">Criminal prodigy Kaz Brekker is offered a chance at a deadly heist that
                        could make him rich beyond his wildest dreams -
                        but he can't pull it off alone. A convict with a thirst for revenge. A sharpshooter who can't
                        walk away from a wager.
                    </p>
                    <div class="d-flex flex-row">
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                    </div>
                </div>
                <div class="d-flex flex-column gap-3">
                    <p class="h5 text-dark">Rs.750</p>
                    <button class="btn btn-outline-dark" onclick="basket('Six of Crows', '750')">Add To Cart</button>
                </div>
            </div>
            <div class="bookcard p-3">
                <img src="./fantasy/the last unicorn.jpeg" alt="the last unicorn" />
                <div class="d-flex flex-column gap-3 m-3">
                    <p class="h5 text-dark">The last unicorn</p>
                    <p class="h6 text-muted">Discription not found
                    </p>
                    <div class="d-flex flex-row">
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                    </div>
                </div>
                <div class="d-flex flex-column gap-3">
                    <p class="h5 text-dark">Rs.300</p>
                    <button class="btn btn-outline-dark" onclick="basket('The last unicorn', '300')">Add To Cart</button>
                </div>
            </div>`;
	} else if (data === 'horror') {
		document.querySelector('#horror').className += ' active';
		document.querySelector(
			'#bookslist',
		).innerHTML = ` <div class="bookcard p-3">
                <img src="./horror/exorcist.jpg" alt="exorcist" />
                <div class="d-flex flex-column gap-3 m-3">
                    <p class="h5 text-dark">Expocrist
                    </p>
                    <p class="h6 text-muted">Ean 11-year-old girl named Regan. Descriptions of the child’s erratic
                        behavior, which includes spitting and screaming
                        obscenities, build to a crescendo as her mother desperately hunts for an exorcist. If you’ve
                        seen the classic movie
                        adaptation, you have an idea of just how scary this situation</p>
                    <div class="d-flex flex-row">
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                    </div>
                </div>
                <div class="d-flex flex-column gap-3">
                    <p class="h5 text-dark">Rs.800</p>
                    <button class="btn btn-outline-dark" onclick="basket('Expocrist', '800')">Add To Cart</button>
                </div>
            </div>
            <div class="bookcard p-3">
                <img src="./horror/salem lot's.jpg" alt="salem lot'" />
                <div class="d-flex flex-column gap-3 m-3">
                    <p class="h5 text-dark">Salem Lot's</p>
                    <p class="h6 text-muted">This story of a small town overrun by vampires is deliciously chilling. As
                        residents experience a growing list of
                        strange encounters and start putting the pieces together, you’ll feel yourself tensing up in
                        anticipation of the final
                        reveal and confrontation.
                    </p>
                    <div class="d-flex flex-row">
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                    </div>
                </div>
                <div class="d-flex flex-column gap-3">
                    <p class="h5 text-dark">Rs.1250</p>
                    <button class="btn btn-outline-dark" onclick="basket('Salem Lot', '1250')">Add To Cart</button>
                </div>
            </div>
            <div class="bookcard p-3">
                <img src="./horror/the girl on the train.jpeg" alt="the girl on the train" />
                <div class="d-flex flex-column gap-3 m-3">
                    <p class="h5 text-dark">The Girl on the Train</p>
                    <p class="h6 text-muted">One day, Watson witnesses something shocking unfold in the backyard of the
                        strangers' home. Rachel tells the authorities
                        what she thinks she saw after learning that Megan is now missing and feared dead. Unable to
                        trust her own memory,
                    </p>
                    <div class="d-flex flex-row">
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                    </div>
                </div>
                <div class="d-flex flex-column gap-3">
                    <p class="h5 text-dark">Rs.750</p>
                    <button class="btn btn-outline-dark" onclick="basket('The Girl on the Train', '750')">Add To Cart</button>
                </div>
            </div>
            <div class="bookcard p-3">
                <img src="./horror/the hacienda.jpg" alt="the hacienda" />
                <div class="d-flex flex-column gap-3 m-3">
                    <p class="h5 text-dark">The Hacienda</p>
                    <p class="h6 text-muted">The Hacienda is a classic Gothic ghost story that might be one of the
                        scariest books of all time. When Beatriz is
                        offered the chance to marry handsome, rich Don Rodolfo Solórzano, she jumps at the chance
                    </p>
                    <div class="d-flex flex-row">
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                    </div>
                </div>
                <div class="d-flex flex-column gap-3">
                    <p class="h5 text-dark">Rs.300</p>
                    <button class="btn btn-outline-dark" onclick="basket('The Hacienda', '300')">Add To Cart</button>
                </div>
            </div>`;
	} else if (data === 'adv') {
		document.querySelector('#adv').className += ' active';
		document.querySelector('#bookslist').innerHTML = `<div class="bookcard p-3">
                <img src="./adventure/treasure island.jpg" alt="treasure island" />
                <div class="d-flex flex-column gap-3 m-3">
                    <p class="h5 text-dark">Treasure Island</p>
                    <p class="h6 text-muted">Think of the high seas and of a buccaneer ship; of a wild seaman with a sea
                        chest full of gold; of Long John Silver; of
                        a buried treasure and of young Jim Hawkins, the boy with the treasure map the key to it all.
                    </p>
                    <div class="d-flex flex-row">
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                    </div>
                </div>
                <div class="d-flex flex-column gap-3">
                    <p class="h5 text-dark">Rs.800</p>
                    <button class="btn btn-outline-dark" onclick="basket('Treasure Island', '800')">Add To Cart</button>
                </div>
            </div>
            <div class="bookcard p-3">
                <img src="./adventure/MOby Dick.jpeg" alt="moby" />
                <div class="d-flex flex-column gap-3 m-3">
                    <p class="h5 text-dark">Moby-Dick</p>
                    <p class="h6 text-muted">Moby-Dick; or, The Whale is a novel by Herman Melville, in which Ishmael
                        narrates the monomaniacal quest of Ahab,
                        captain of the whaler Pequod, for revenge on the albino sperm whale Moby Dick, which on a
                        previous voyage destroyed
                        Ahab's ship and severed his leg at the knee.
                    </p>
                    <div class="d-flex flex-row">
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                    </div>
                </div>
                <div class="d-flex flex-column gap-3">
                    <p class="h5 text-dark">Rs.1250</p>
                    <button class="btn btn-outline-dark" onclick="basket('Moby-Dick', '1250')">Add To Cart</button>
                </div>
            </div>
            <div class="bookcard p-3">
                <img src="./adventure/odyssey.webp" alt="Odysseus" />
                <div class="d-flex flex-column gap-3 m-3">
                    <p class="h5 text-dark">Odyssey</p>
                    <p class="h6 text-muted">Ten years after the Trojan War and the Fall of Troy, Odysseus, one of the
                        war heroes, has still not returned to his
                        kingdom, Ithaca. Assumed to be dead, his wife Penelope and son Telemachus must deal with a group
                        of unruly suitors who
                        have overrun Odysseus
                    </p>
                    <div class="d-flex flex-row">
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                    </div>
                </div>
                <div class="d-flex flex-column gap-3">
                    <p class="h5 text-dark">Rs.750</p>
                    <button class="btn btn-outline-dark" onclick="basket('Odyssey', '750')">Add To Cart</button>
                </div>
            </div>
            <div class="bookcard p-3">
                <img src="./adventure/the call of wind.jpeg" alt="the call of wind" />
                <div class="d-flex flex-column gap-3 m-3">
                    <p class="h5 text-dark">The Call of the Wild</p>
                    <p class="h6 text-muted">One of London's most popular novels, The Call of the Wild is the story of a
                        dog named, Buck who is abducted from a
                        comfortable life as a pet and tossed into the maelstrom of the Yukon Gold Rush.
                    </p>
                    <div class="d-flex flex-row">
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                    </div>
                </div>
                <div class="d-flex flex-column gap-3">
                    <p class="h5 text-dark">Rs.300</p>
                    <button class="btn btn-outline-dark" onclick="basket('The Call of the Wild', '300')">Add To Cart</button>
                </div>
            </div>`;
	}
}
