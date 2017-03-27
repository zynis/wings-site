app.factory('teamFactory', function ($translate, $q) {
  var team = [
	 {
		name: 'Serguei Popov',
		title: 'Scientific Advisor',
		pic: 'serg',
		bio: 'Brazilian mathematician of Russian origin with a Ph.D. from the Moscow State University. Currently works in the field of Stochastic Processes and is a Crypto enthusiast. Part of IOTA team.',
		social: [{
		  name: 'btt',
		  link: 'https://bitcointalk.org/index.php?action=profile;u=168348'
		}, {
		  name: 'in',
		  link: 'https://br.linkedin.com/in/serguei-popov-631bb762'
		}]
	 },
	 {
		name: 'Boris Povod',
		pic: 'boris',
		title: 'Blockchain Developer',
		bio: 'A known blockchain developer with many years of experience in the Crypto scene. In the past he Co-Founded Crypti and served as the lead developer. Also acts as a technical advisor for Lisk',
		photo: 'assets/images/persons/boris.png',
		social: [{
		  name: 'btt',
		  link: 'https://bitcointalk.org/index.php?action=profile;u=336778'
		}, {
		  name: 'fb',
		  link: 'https://www.facebook.com/MrPovod'
		}, {
		  name: 'tw',
		  link: 'https://twitter.com/mr_povod'
		}, {
		  name: 'in',
		  link: 'https://ru.linkedin.com/in/boris-povod-361a1b79/'
		}]
	 },
	 {
		name: 'Stas Oskin',
		title: 'BizDev and Core Dev',
		pic: 'stas',
		bio: 'Has over 10Y of extensive experience in engineering, development and management of software, cloud, healthcare, crypto-currency, social products and services. Stas is an entrepreneur, Crypto enthusiast and a Life hacker.',
		social: [{
		  name: 'btt',
		  link: 'https://bitcointalk.org/index.php?action=profile;u=20214'
		}, {
		  name: 'in',
		  link: 'https://il.linkedin.com/in/stasoskin'
		}]
	 },
	 {
		name: 'Alexey Kopievsky',
		title: 'Senior Frontend Developer',
		pic: 'alexey',
		bio: 'Alex is a developer with deep knowledge and passion of frontend technologies. He is hard working and always eager to learn something new.',
		social: [{
		  name: 'fb',
		  link: 'https://www.facebook.com/profile.php?id=100008332484706'
		}, {
		  name: 'in',
		  link: 'https://ru.linkedin.com/in/alexey-kopievskiy-a472a0102'
		}]
	 },
    {
      name: 'Anton Bilyk',
      title: 'Frontend Developer',
      pic: 'anton',
      bio: 'Anton is Javascript evangelist with 16 years experience. His area includes fullstack developing, frontend developing, UI/UX.',
      social: [{
        name: 'fb',
        link: 'https://facebook.com/anton.v.bilyk'
      }, {
        name: 'in',
        link: 'https://www.linkedin.com/in/antonbilyk/'
      }]
    },
    {
      name: 'Artem Gorbachev',
      title: 'Math Model Developer',
      pic: 'artem',
      bio: 'Artem Gorbachev, PhD in Engineering, who recently left the Moscow Exchange to focus on Blockchain and Smart Contracts projects, is working on our forecasting rewards math models with our Scientific Advisor Serguei Popov, PhD in Math and Full Professor in Unicamp.',
      social: [{
        name: 'in',
        link: 'https://linkedin.com/in/artem-gorbachev-91479b72'
      }]
    },
	 {
		name: 'Harsh Vakharia',
		pic: 'harsh',
		title: 'Full Stack Developer',
		bio: 'Passionate engineer. Loves to create something people want, and admires simplicity. Harsh likes to experiment with Node.js, Docker, and Ethereum. He develops FOSS and enjoys contributing back to open community.',
		social: [{
		  name: 'fb',
		  link: 'https://www.facebook.com/profile.php?id=1684195558'
		}, {
		  name: 'in',
		  link: 'https://www.linkedin.com/in/harshjv'
		}, {
		  name: 'tw',
		  link: 'https://twitter.com/harshjv'
		}]
	 },
	 {
		name: 'Sebastian Stupurac',
		title: 'Project & Product',
		pic: 'seb',
		bio: 'Entrepreneur, Visionary, Husband. A big believer in Crypto and blockchain technologies in which he has been involved since 2013, Sebastian has vast experience in Information Systems, people & product management and customer support. Sebastian has a BA in Information Systems.',
		social: [{
		  name: 'fb',
		  link: 'https://www.facebook.com/sebastian.stupurac'
		}, {
		  name: 'in',
		  link: 'https://il.linkedin.com/in/sebastian-stupurac-6bbb1712'
		}]
	 },
   {
     name: 'Chandler Guo',
     title: 'Strategic Adviser',
     pic: 'chandler',
     bio: 'Angel investor in Bitcoin and Ethereum Classic startups Bitangel including Btc123.com Bitbank.com Jua.com Bw.com Bitfund.pe Richfund.pe etcchain.com',
     social: [{
       name: 'in',
       link: 'https://www.linkedin.com/in/chandler-guo-151681b7'
     }]
   },
	 {
		name: 'Dominik Zynis',
		title: 'Marketing & Communications',
		pic: 'domi',
		bio: 'In the Crypto scene since 2012 and has a long background in software marketing and communications (Mastercoin/Omni Protocol, Siemens/eMeter, Oracle, JSON)',
		social: [{
		  name: 'tw',
		  link: 'https://twitter.com/chloregy'
		}, {
		  name: 'btt',
		  link: 'https://bitcointalk.org/index.php?action=profile;u=90917'
		}]
	 },
	 {
		name: 'Nikolay Taymanov',
		title: 'Community Manager',
		pic: 'nik',
		bio: 'Russian crypto enthusiast with a Masters of Science diploma from the Moscow State Aviation University. In 2015, he left his job to focus on studying the blockchain.',
		social: [{
		  name: 'fb',
		  link: 'https://www.facebook.com/btcturbo'
		}, {
		  name: 'tw',
		  link: 'https://twitter.com/btcturbo'
		}, {
		  name: 'btt',
		  link: 'https://bitcointalk.org/index.php?action=profile;u=561585'
		}]
	 },
	 {
		name: 'Lior Zysman',
		title: 'Legal Advisor',
		pic: 'lior',
		bio: 'Lior is a corporate lawyer advising startups and investors on crowdfunding and digital currencies, and working on decentralized autonomous non profits (Runner-up at Consensus 2016 Hackathon with a Charity DAO). Lior holds Bachelor of Law and B.A. in business administration, from Tel Aviv university.',
		social: [
		  {
			 name: 'tw',
			 link: 'https://twitter.com/zysman'
		  }
		]
	 },
	 {
		name: 'Nimrod Back',
		title: 'Campaign Advisor',
		pic: 'nimrod',
		bio: 'Nimrod is an inventor, app developer and crowd-funding rock-star. His first creation, Pressy, was a breakthrough success and consider to be one of the most successful Kickstarter campaigns ever. Since then Nimrod also invented and successfully funded Boogie Dice and helped many other projects hit their goal.'
	 },
	 {
		name: 'Eric Gu',
		title: 'Marketing Advisor',
		pic: 'eric',
		bio: 'Organizer of the Bitcoin Shanghai Meetup, Eric is a seasoned IT professional that started out as a programmer and acquired along the journey the abilities to better manage multi-disciplinary projects and to navigate through tough challenges.'
	 },
	 {
		name: 'Matthew Elias',
		title: 'Strategic Advisor',
		pic: 'matt',
		bio: 'A legal and subject matter expert in Bitcoin, cryptocurrency, and decentralized technologies. In 2011, wrote about the legal considerations of pseudonymous Bitcoin/e-cash. I advise and consult with entrepreneurs, technologists, and policy makers at Nomos Labs LLC., formerly; Counterparty, Mastercoin/Omni Protocol, FCC (Federal Communication Commission).'
	 }
  ];

  function getTeam() {
	 var bios = [];
	 var names = [];
	 var titles = [];

	 var realTeam = angular.copy(team);

	 angular.forEach(realTeam, function (t) {
		bios.push(t.bio);
		names.push(t.name);
		titles.push(t.title);
	 });

	 return $q.all([
	   $translate(bios),
		$translate(names),
		$translate(titles)
	 ]).then(function (result) {
		bios = result[0];
		names = result[1];
		titles = result[2];

		angular.forEach(realTeam, function (t) {
		  t.bio = bios[t.bio];
		  t.title = titles[t.title];
		  t.name = names[t.name];
		});

		return realTeam;
	 });
  }

  return {
	 getTeam: getTeam
  };
});
