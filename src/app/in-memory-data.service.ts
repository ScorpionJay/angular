 import { InMemoryDbService } from 'angular2-in-memory-web-api';
 export class InMemoryDataService implements InMemoryDbService {
   createDb() {
     let invests = [
       {type: 'uub111', name: 'test111 sfdf',description:'description',rate:'7.00~8.00%',term:'3~6'},
       {type: 'qdb', name: 'test2',description:'description',rate:'7.00~8.00%',term:'3~6'},
       {type: 'hqb', name: 'test3',description:'description',rate:'7.00~8.00%',term:'3~6'},
       {type: 'tyb', name: 'test4',description:'description',rate:'7.00~8.00%',term:'3~6'},
       {type: 'xsb', name: 'test5',description:'description',rate:'7.00~8.00%',term:'3~6'},
    ];
     let investLists = [
       {type: 'uub', name: 'test1 hhh',description:'description',rate:'7.00~8.00%',term:'3~6'},
       {type: 'qdb', name: 'test1',description:'description',rate:'7.00~8.00%',term:'3~6'},
       {type: 'hqb', name: 'test1',description:'description',rate:'7.00~8.00%',term:'3~6'},
      {type: 'tyb', name: 'test1',description:'description',rate:'7.00~8.00%',term:'3~6'},
       {type: 'xsb', name: 'test1',description:'description',rate:'7.00~8.00%',term:'3~6'},
     ];
     return {invests,investLists};
   }
 }
