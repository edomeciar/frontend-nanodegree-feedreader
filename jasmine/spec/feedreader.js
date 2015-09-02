/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */

        it('Has a URL defined',function(){
            /*
            loop allFeeds and check if url is defined, not null and not empty string
            */
            $.each(allFeeds, function( index, value ) {
                expect(value.url).toBeDefined();
                expect(value.url).not.toBeNull();
                expect(value.url).not.toBe('');
            });
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */

         it('Has a name defined',function(){
            /*
            loop allFeeds and check if name is defined, not null and not empty string
            */
            $.each(allFeeds, function( index, value ) {
                expect(value.name).toBeDefined();
                expect(value.name).not.toBeNull();
                expect(value.name).not.toBe('');
            });
        });

    });


    /* TODO: Write a new test suite named "The menu" */

    describe('The menu',function(){

        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */

         it("Hidden menu by default",function(){
            /*
            test, if body has class "menu-hidden" by default. This class is used to hide/show menu
            */
            expect($("body").hasClass("menu-hidden")).toBe(true);
         });

         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */

          it("Click menu visibiliy",function(){
            /*
            fake action click on menu icon and test, if class menu-hidden was add/removed
            */
            var domBody = $("body");
            $(".menu-icon-link").click();
            expect(domBody.hasClass("menu-hidden")).not.toBe(true);
            $(".menu-icon-link").click();
            expect(domBody.hasClass("menu-hidden")).toBe(true);
          });

     });

    /* TODO: Write a new test suite named "Initial Entries" */

    describe('Initial Entries',function(){

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test wil require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

        /*
        test loading feed by using jasmine asych testing. Call loadFeed function with id 0 and expecting, that this function
        will populate dom element ".feed .entry-link"
        */
        beforeEach(function(done) {
            setTimeout(function() {
                loadFeed(0,done);
            }, 100);
        });

        it('Ajax load',function(done){
            var feedLength = $(".feed .entry-link").length;
            expect(feedLength).toBeGreaterThan(0);
            done();
        });

     });

    /* TODO: Write a new test suite named "New Feed Selection"*/

    describe('New Feed Selection',function(done){

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */

         /*
        define two variable beforeLoad, afterLoad. Populate beforeLoad with html from .feed before call function loadFeed.
        Populate afterLoad in done function with html from same DOM elemnt and compare this two variables. Expect to be different.
         */
        var beforeLoad;
        var afterLoad;

        beforeEach(function(done) {
                beforeLoad = $(".feed").html();
                loadFeed(1,done);

        });

        it('Ajax load content change',function(done){
            afterLoad = $(".feed").html();
            expect(afterLoad).not.toEqual(beforeLoad);
            done();
        });

    });




}());
