const Page = require('./page');

class HoomePage extends Page {

    get linksinpage () {

        return $("ul li a");
    }

    get linkinanotherpage () {

        return $('a[href="http://elementalselenium.com/"]');
    }

}

module.exports = new HoomePage();