app.factory('pressFactory', function ($translate) {
  var press = [
	 {
		text: 'It Won’t Fail Like Slock.it',
		logo: 'assets/images/bitcoin-press.png',
		link: 'https://news.bitcoin.com/wings-dao-fail-slockit/',
		name: 'Bitcoin.com'
	 },
	 {
		text: 'Wings developed by the well known Crypti team is a platform that will aim to create and “mass-market” newly launched DAO’s across the globe.',
		logo: 'assets/images/lbn-press.png',
		link: 'http://www.livebitcoinnews.com/meet-wings-the-dao-creation-platform/',
		name: 'LiveBitcoinNews'
	 },
	 {
		text: 'WINGS developers offer Rootstock’s sidechain as a reserve payback tool.',
		logo: 'assets/images/press-1.png',
		link: 'http://forklog.net/wings-team-offers-a-standard-for-safe-daos/',
		name: 'Forklog'
	 },
	 {
		text: 'Next big move in terms of DAO',
		logo: 'assets/images/press-2.png',
		link: 'http://news.blockchain.hk/wings-dao-meet-up-shanghai/',
		name: 'Blockchain.hk'
	 },
	 {
		text: 'How ‘Wings’ DAO Aims to Solve The Biggest Obstacles Faced by ‘Decentralized Autonomous Organizations.',
		logo: 'assets/images/press-3.png',
		link: 'http://cryptorials.io/how-wings-dao-aims-to-solve-the-biggest-obstacles-faced-by-decentralized-autonomous-organizations/',
		name: 'Cryptorials'
	 },
	 {
		text: 'Wings will be a user-friendly platform for DAO creation and management. The complicated code will be transformed into a pleasant user interface making DAO production possible to anyone who wishes it.',
		logo: 'assets/images/themerkle-press.png',
		link: 'http://themerkle.com/wings-platform-is-a-dao-creation-tool/',
		name: 'TheMerkle'
	 },
	 {
		text: 'Wings DAO will be more than a simple DAO',
		logo: 'assets/images/coincheck-press.png',
		link: 'https://coincheck.com/en/blog/1608',
		name: 'CoinCheck'
	 },
	 {
		text: 'Wings brings the power back to project supporters',
		logo: 'assets/images/watch-press.png',
		link: 'http://www.altcoinwatch.com/ico/upcoming-ico-wings-where-dao-unicorns-are-born/',
		name: 'Altcoin Watch'
	 },
	 {
		text: 'Something not tried before',
		logo: 'assets/images/nb-press.png',
		link: 'https://coins.newbium.com/post/440-the-wings-dao-platform-explained',
		name: 'Coins Newbium'
	 }
  ];
  
  
  function getPresses() {
	 var texts = [];
  
	 angular.forEach(press, function (p) {
		texts.push(p.text);
	 });
  
	 return $translate(texts).then(function (translations) {
		angular.forEach(press, function (p) {
		  p.text = translations[p.text];
		});
	 
		return press;
	 }).catch(function (err) {
		console.log(err);
	 });
  }
  
  return {
	 getPresses: getPresses
  }
});