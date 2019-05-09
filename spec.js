const helper = require('./helper');
const target = require('./target');

describe('Ads', () => {
    let adsTargeting, adsSize, iu_parts

    beforeAll(async () => {
        browser.get('https://www.elle.com/culture/celebrities/a27267952/kate-beckinsale-pete-davidson-not-dating-anymore/').then(() => {
            browser.wait(helper.getTargetingMap(), 20000)
        browser.actions().mouseMove(element(by.css('.transporter'))).perform().then(() => {
                browser.actions().mouseMove(element(by.css('.footer'))).perform();
            })
        })
       
        adsTargeting = await helper.getTargetingMap();
        adsSize = await helper.getSize();
        iu_parts = await helper.getIu_parts();
    });

    describe('Page Info', () => {
        let PageInfo
        beforeAll(async () => {
            PageInfo = await helper.getPageInfo();
        });

        it(`should have the page name of ${target.page.targeting.site}`, () => {
            expect(PageInfo.site).toEqual(target.page.targeting.site);
        });

        it(`should have IOM of ${target.page.targeting.IOM}`, () => {
            expect(PageInfo.IOM).toEqual(target.page.targeting.IOM);
        });

        it(`should have artid of ${target.page.targeting.artid}`, () => {
            expect(PageInfo.artid).toEqual(target.page.targeting.artid);
        });

        it(`should have cat of ${target.page.targeting.cat}`, () => {
            expect(PageInfo.cat).toEqual(target.page.targeting.cat);
        });

        it(`should have dnt of ${target.page.targeting.dnt}`, () => {
            expect(PageInfo.dnt).toEqual(target.page.targeting.dnt);
        });

        it(`should have lpid of ${target.page.targeting.lpid}`, () => {
            expect(PageInfo.lpid).toEqual(target.page.targeting.lpid);
        });

        it(`should have orgpub of ${target.page.targeting.orgpub}`, () => {
            expect(PageInfo.orgpub).toEqual(target.page.targeting.orgpub);
        });

        it(`should have page of ${target.page.targeting.page}`, () => {
            expect(PageInfo.page).toEqual(target.page.targeting.page);
        });

        it(`should have pageurl of ${target.page.targeting.pageurl}`, () => {
            expect(PageInfo.pageurl).toEqual(target.page.targeting.pageurl);
        });

        it(`should have refer of ${target.page.targeting.refer}`, () => {
            expect(PageInfo.refer).toEqual(target.page.targeting.refer);
        });

        it(`should have sect of ${target.page.targeting.sect}`, () => {
            expect(PageInfo.sect).toEqual(target.page.targeting.sect);
        });

        it(`should have site of ${target.page.targeting.site}`, () => {
            expect(PageInfo.site).toEqual(target.page.targeting.site);
        });

        it(`should have src of ${target.page.targeting.src}`, () => {
            expect(PageInfo.src).toEqual(target.page.targeting.src);
        });

        it(`should have sub of ${target.page.targeting.sub}`, () => {
            expect(PageInfo.sub).toEqual(target.page.targeting.sub);
        });

        it(`should have tool of ${target.page.targeting.tool}`, () => {
            expect(PageInfo.tool).toEqual(target.page.targeting.tool);
        });

        it(`should have type of ${target.page.targeting.type}`, () => {
            expect(PageInfo.type).toEqual(target.page.targeting.type);
        });

        it(`should have viewport of ${target.page.targeting.viewport}`, () => {
            expect(PageInfo.viewport).toEqual(target.page.targeting.viewport);
        });
    });

    target.page.ads.forEach((ad, i) => {

        describe(`tests for ${ad.position} position`, () => {

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
                expect(iu_parts[i]).toEqual(ad.iu);
            });

            it(`should have the sizes ${ad.sizes}`, () => {
                expect(adsSize[i]).toEqual(ad.sizes);
            });
        });
    });
});
