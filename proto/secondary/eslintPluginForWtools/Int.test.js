( function _Int_test_s_()
{

'use strict';

if( typeof module !== 'undefined' )
{

  let _ = require( 'wTesting' );

  debugger;
  let plugin = require( 'eslint-plugin-for-wtools' );
  debugger;

}

let _ = _global_.wTools;

// --
//
// --

// --
//
// --

let Self =
{

  name : 'eslint.space.in.parens.advanced',
  silencing : 1,

  tests :
  {

  },

}

//

Self = wTestSuite( Self );
if( typeof module !== 'undefined' && !module.parent )
_global_.wTester.test( Self.name );

} )();
