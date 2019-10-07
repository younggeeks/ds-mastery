import {Graph} from "../index";

test('Graph sample test', ()=>{
    const grap = new Graph<number>();

    grap.addVertice(54);
    grap.addVertice(20);
    grap.addEdge(54,20)

    expect(grap.list.size).toBe(2)
    // @ts-ignore
    expect(grap.list.get(54).length).toBe(1)
});
