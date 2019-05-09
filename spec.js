const helper = require('./helper');
const target = require('./target');

describe('Ads', () => {
    let adsTargeting, adsSize, iuParts

    beforeAll(() => {
        browser.get('https://www.elle.com/culture/celebrities/a27267952/kate-beckinsale-pete-davidson-not-dating-anymore/').then(() => {
            browser.actions().mouseMove(element(by.css('.footer'))).perform().then(async () => {
                adsTargeting = await helper.getTargetingMap();
                adsSize = await helper.getSize();
                iuParts = await helper.getIuParts();
            });
        });
    });

    describe('Page Info', () => {
        let pageInfo;

        beforeAll(async () => {
            pageInfo = await helper.getPageInfo();
        });

        it(`should have the page name of ${target.page.targeting.site}`, () => {
            expect(pageInfo.site).toEqual(target.page.targeting.site);
        });

        it(`should have the InfoIOM of ${target.page.targeting.IOM}`, () => {
            expect(pageInfo.IOM).toEqual(target.page.targeting.IOM);
        });

        it(`should have the id of ${target.page.targeting.artid}`, () => {
            expect(pageInfo.artid).toEqual(target.page.targeting.artid);
        });

        it(`should have the cat of ${target.page.targeting.cat}`, () => {
            expect(pageInfo.cat).toEqual(target.page.targeting.cat);
        });

        it(`should have the dnt of ${target.page.targeting.dnt}`, () => {
            expect(pageInfo.dnt).toEqual(target.page.targeting.dnt);
        });

        it(`should have the lpid of ${target.page.targeting.lpid}`, () => {
            expect(pageInfo.lpid).toEqual(target.page.targeting.lpid);
        });

        it(`should have the orgpub of ${target.page.targeting.orgpub}`, () => {
            expect(pageInfo.orgpub).toEqual(target.page.targeting.orgpub);
        });

        it(`should have the page of ${target.page.targeting.page}`, () => {
            expect(pageInfo.page).toEqual(target.page.targeting.page);
        });

        it(`should have the pageurl of ${target.page.targeting.pageurl}`, () => {
            expect(pageInfo.pageurl).toEqual(target.page.targeting.pageurl);
        });

        it(`should have the refer of ${target.page.targeting.refer}`, () => {
            expect(pageInfo.refer).toEqual(target.page.targeting.refer);
        });

        it(`should have the sect of ${target.page.targeting.sect}`, () => {
            expect(pageInfo.sect).toEqual(target.page.targeting.sect);
        });

        it(`should have the site of ${target.page.targeting.site}`, () => {
            expect(pageInfo.site).toEqual(target.page.targeting.site);
        });

        it(`should have the src of ${target.page.targeting.src}`, () => {
            expect(pageInfo.src).toEqual(target.page.targeting.src);
        });

        it(`should have the sub of ${target.page.targeting.sub}`, () => {
            expect(pageInfo.sub).toEqual(target.page.targeting.sub);
        });

        it(`should have the tool of ${target.page.targeting.tool}`, () => {
            expect(pageInfo.tool).toEqual(target.page.targeting.tool);
        });

        it(`should have the type of ${target.page.targeting.type}`, () => {
            expect(pageInfo.type).toEqual(target.page.targeting.type);
        });

        it(`should have the viewport of ${target.page.targeting.viewport}`, () => {
            expect(pageInfo.viewport).toEqual(target.page.targeting.viewport);
        });
    });

    target.page.ads.forEach((ad, i) => {
        describe(`${ad.position} position`, () => {
            it(`should have the adid ${ad.adid}`, () => {
                expect(adsTargeting[i].pos).toEqual(ad.pos);
            });

            it(`should have the loc ${ad.loc}`, () => {
                expect(adsTargeting[i].loc).toEqual(ad.loc);
            });

            it(`should have the position ${ad.position}`, () => {
                expect(adsTargeting[i].position).toEqual(ad.position);
            });

            it(`should have the load ${ad.load}`, () => {
                expect(adsTargeting[i].load).toEqual(ad.load);
            });

            it(`should have the iu - parts  [${ad.iu.split("/")}]`, () => {
                expect(iuParts[i]).toEqual(ad.iu);
            });

            it(`should have the sizes ${ad.sizes}`, () => {
                expect(adsSize[i]).toEqual(ad.sizes);
            });
        });
    });
});
