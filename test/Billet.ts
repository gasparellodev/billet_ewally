import Billet from "../src/Domain/Entity/Billet";

test ('Must return as a valid billet without separators', () => {
    const code = '23793381286008386627105000063304890170000100000';
    const billet = new Billet(code);
    expect(billet.getValue()).toBe(code);    
});
test ('Must return as a valid billet with separators', () => {
    const code = '26090.76308.75844.498586.54300.000004.3.89240000041807';
    const billet = new Billet(code);
    expect(billet.getValue()).toBe(code);
});
test ( 'Must return as a invalid billet', () => {
    expect(() => new Billet('26090_76308_75844_498586_54300_000004_3_89240000041807')).toThrow(new Error('Invalid typeable Line Size!'));
    expect(() => new Billet('26090#76308b75844c498586d54300e000004f3g89240000041807')).toThrow(new Error('Invalid typeable Line Size!'));
    expect(() => new Billet('26090#63087$844&9_58654300000004389240000041807')).toThrow(new Error('Typeable line has invalid characters!'));
});
test ( 'Must return as a invalid billet with same digits', () => {
    expect(() => new Billet('11111111111111111111111111111111111111111111111')).toThrow(new Error('Typeable line has a sequence of equal digits!'));
    expect(() => new Billet('999999999999999999999999999999999999999999999999')).toThrow(new Error('Typeable line has a sequence of equal digits!'));
});
test ( 'Must return as a invalid billet without code', () => {
    expect(() => new Billet('')).toThrow(new Error('Uninformed typeable line!'));
});
test ( 'Must return as a invalid field digit in billet', () => {
    expect(() => new Billet('26090763097584449858654300000004389240000041807')).toThrow(new Error('The first field checker digit is invalid!'));
    expect(() => new Billet('00190000090282113542025476786170689200000005480')).toThrow(new Error('The second field checker digit is invalid!'));
    expect(() => new Billet('23793645044206300544341000287702689200000039062')).toThrow(new Error('The third field checker digit is invalid!'));
});
test ('Must return as a valid billet with general digit calc forced to 1', () => {
    const code = '23792656026206300524373005393704189200000030459';
    const billet = new Billet(code);
    expect(billet.getValue()).toBe(code);    
});
test ('Must return as a invalid billet general digit', () => {
    expect(() => new Billet('23792656026206300524373005393704289200000030459')).toThrow(new Error('The general checker digit is invalid!'));   
});
test ('Must return factor data from digitable line code', () => {
    const code = '23793381286008386627105000063304890170000100000';
    const billet = new Billet(code);
    expect(billet.getDateFactor()).toEqual('8924');
});
test ('Must return amount from digitable line code', () => {
    const code = '23793381286008386627105000063304890170000100000';
    const billet = new Billet(code);
    expect(billet.getAmount()).toEqual('41807');
});
test ('Must return as a valid covenant without separators', () => {
    const code = '836400000003615400531070159934590112101293073785';
    const billet = new Billet(code);
    expect(billet.getValue()).toBe(code);    
});
test ('Must return as a valid covenant with separators', () => {
    const code = '82630000000.5.97630109202.0.01025252729.5.43102020019.9';
    const billet = new Billet(code);
    expect(billet.getValue()).toBe(code);    
});
test ('Must return as a invalid covenant', () => {
    expect(() => new Billet('826300000004976301092020010252527295431020200199')).toThrow(new Error('The first field checker digit is invalid!'));
    expect(() => new Billet('826300000005976301092021010252527295431020200199')).toThrow(new Error('The second field checker digit is invalid!'));
    expect(() => new Billet('826300000005976301092020010252527296431020200199')).toThrow(new Error('The third field checker digit is invalid!'));
    expect(() => new Billet('826300000005976301092020010252527295431020200191')).toThrow(new Error('The fourth field checker digit is invalid!'));  
});
test ('Must return as a invalid covenant whith invalid characters', () => {
    expect(() => new Billet('8367000000a8368201110005$01010202222616506228728')).toThrow(new Error('Typeable line has invalid characters!'));
    expect(() => new Billet('83600000001&5.15520053107#9#15863989511.5.10129307378.5')).toThrow(new Error('Invalid typeable Line Size!'));
});
test ('Must return as a valid covenant with general digit', () => {
    const code = '836700000018368201110005001010202222616506228728';
    const billet = new Billet(code);
    expect(billet.getValue()).toBe(code);    
});
test ('Must return as a invalid covenant general digit', () => {
    expect(() => new Billet('836100000018368201110005001010202222616506228728')).toThrow(new Error('The general checker digit is invalid!'));   
});
test ('Must return factor data from covenant digitable line code', () => {
    const code = '846200000020445002962022202208840001002715520207';
    const billet = new Billet(code);
    expect(billet.getDateFactor()).toEqual('20220220');
});
test ('Must return amount from covenant digitable line code', () => {
    const code = '846200000020445002962022202208840001002715520207';
    const billet = new Billet(code);
    expect(billet.getAmount()).toEqual('24450');
});