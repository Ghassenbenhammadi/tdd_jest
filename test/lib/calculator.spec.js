const Calculator=require('../../src/lib/calculator');

describe("Calculator Test Suite",()=>{
    it("Should return an object instance of Calculator",()=>{

       //Act
       let _calculator = new Calculator()

       // Assert or Expect
       console.log(_calculator);
       expect(typeof _calculator).toEqual("object")

    })

    it("Should have an add method",()=>{

       let add = new Calculator().add;
 
        //Act
        let result = add(5,6)
 
        // Assert or Expect
      expect(result).toEqual(11);
 
     })
     it("Should Success to div with correct argument",()=>{

        let div = new Calculator().div;
  
         //Act
         let result = div(10,5)
  
         // Assert or Expect
       expect(result).toEqual(2);
  
      })
      it("Should Fail to div with correct argument",()=>{

        let div = new Calculator().div;
  
         //Act
         let result = div(10,0)
  
         // Assert or Expect
       expect(result).toEqual(undefined);
  
      })

})