// JavaScript Document
var app=angular.module('abc',['ngStorage']);

app.controller('form',function($scope,$localStorage,$sessionStorage){
	
	$scope.$storage=$sessionStorage;
	
	
	$scope.month=["Jan","Feb","March","April","May","June","July","Aug","Sep","Oct","Nov","Dec"];
var year=[];
	var i;
	for(i=2018;i>=1970;i--){
		year.push(i);
	}
	$scope.year=year;
	//validation
	$scope.NoShow=true;
	$scope.NoShow=true;
	
	
	$scope.CheckName=function(){
	if(!$scope.Name){
		$scope.Status=0;
		$scope.Err=0;
		$scope.Cross=true;
		$scope.Tick=false;
	}
		
	else{
		$scope.Status=1;
		$scope.Err=1;
		$scope.Tick=true;
		$scope.Cross=false;
	}
	};
	$scope.CheckExpertise=function(){
	if(!$scope.Expertise){
		$scope.Status37=0;
		$scope.Err37=0;
		$scope.Cross37=true;
		$scope.Tick37=false;
	}
		
	else{
		$scope.Status37=1;
		$scope.Err37=1;
		$scope.Tick37=true;
		$scope.Cross37=false;
	}
	};
	$scope.CheckIntro=function(){
	if(!$scope.Intro){
		$scope.Status38=0;
		$scope.Err38=0;
		$scope.Cross38=true;
		$scope.Tick38=false;
	}
		
	else{
		$scope.Status38=1;
		$scope.Err38=1;
		$scope.Tick38=true;
		$scope.Cross38=false;
	}
	};
	$scope.CheckEmail=function(){
		
	if(!$scope.Email){
		$scope.Status1=0;
		$scope.Err1=0;
		$scope.Cross1=true;
		$scope.Tick1=false;
	}
	else{
		$scope.Status1=1;
		$scope.Err1=1;
		$scope.Tick1=true;
		$scope.Cross1=false;
	}
	};
	
	
	$scope.CheckContact=function(){
		if(!$scope.Contact){
		$scope.Status2=0;
		$scope.Err2=0;
			$scope.Cross2=true;
		$scope.Tick2=false;
	}
	else if((''+$scope.Contact).length!=10){
		$scope.Status2=0;
		$scope.Err2=0;
		$scope.Cross2=true;
		$scope.Tick2=false;
	}
		else{
			$scope.Status2=1;
			$scope.Err2=1;
			$scope.Tick2=true;
		$scope.Cross2=false;
		}
	};
	
	$scope.CheckAddress1=function(){
		
	if(!$scope.Address1){
		$scope.Status3=0;
		$scope.Err3=0;
		$scope.Cross3=true;
		$scope.Tick3=false;
	}
	else{
		$scope.Status3=1;
		$scope.Err3=1;
		$scope.Tick3=true;
		$scope.Cross3=false;
	}
	};
	
	$scope.CheckAddress2=function(){
		
	if(!$scope.Address2){
		$scope.Status4=0;
		$scope.Err4=0;
		$scope.Cross4=true;
		$scope.Tick4=false;
	}
	else{
		$scope.Status4=1;
		$scope.Err4=1;
		$scope.Tick4=true;
		$scope.Cross4=false;
	}
	};
	
	$scope.CheckPin=function(){
		if(!$scope.Pin){
		$scope.Status5=0;
		$scope.Err5=0;
			$scope.Cross5=true;
		$scope.Tick5=false;
	}
	else if((''+$scope.Pin).length!=6){
		$scope.Status5=0;
		$scope.Err5=0;
		$scope.Cross5=true;
		$scope.Tick5=false;
	}
		else{
			$scope.Status5=1;
			$scope.Err5=1;
			$scope.Tick5=true;
		$scope.Cross5=false;
		}
	};
	
	$scope.CheckCity=function(){
		
	if(!$scope.City){
		$scope.Status6=0;
		$scope.Err6=0;
		$scope.Cross6=true;
		$scope.Tick6=false;
	}
	else{
		$scope.Status6=1;
		$scope.Err6=1;
		$scope.Tick6=true;
		$scope.Cross6=false;
	}
	};
	
	$scope.CheckState=function(){
		
	if(!$scope.State){
		$scope.Status7=0;
		$scope.Err7=0;
		$scope.Cross7=true;
		$scope.Tick7=false;
	} 
	else{
		$scope.Status7=1;
		$scope.Err7=1;
		$scope.Tick7=true;
		$scope.Cross7=false;
	}
	};
	
	$scope.CheckCompany1=function(){
		
	if(!$scope.CompanyName1){
		$scope.Status8=0;
		$scope.Err8=0;
		$scope.Cross8=true;
		$scope.Tick8=false;
	} 
	else{
		$scope.Status8=1;
		$scope.Err8=1;
		$scope.Tick8=true;
		$scope.Cross8=false;
	}
	};
	
	$scope.CheckJobTitle1=function(){
		
	if(!$scope.JobTitle1){
		$scope.Status9=0;
		$scope.Err9=0;
		$scope.Cross9=true;
		$scope.Tick9=false;
	} 
	else{
		$scope.Status9=1;
		$scope.Err9=1;
		$scope.Tick9=true;
		$scope.Cross9=false;
	}
	};
	
	$scope.CheckStartMonth1=function(){
		
			if(!$scope.StartMonth1){
		$scope.Status10=0;
		$scope.Err10=0;
		$scope.Cross10=true;
		$scope.Tick10=false;
	} 
		else if(!$scope.StartYear1){
			$scope.Cross10=false;
			$scope.Tick10=false;
			$scope.Status10=1;
		$scope.Err10=1;
		}
	else{
		$scope.Status10=1;
		$scope.Err10=1;
		$scope.Tick10=true;
		$scope.Cross10=false;
	}
	};
		
	$scope.CheckStartYear1=function(){
		
			if(!$scope.StartYear1){
		$scope.Status11=0;
		$scope.Err11=0;
		$scope.Cross10=true;
		$scope.Tick10=false;
	} 
		else if(!$scope.StartMonth1){
			$scope.Cross10=false;
			$scope.Tick10=false;
			$scope.Status11=1;
		$scope.Err11=1;
		}
	else{
		$scope.Status11=1;
		$scope.Err11=1;
		$scope.Tick10=true;
		$scope.Cross10=false;
	}
	};
		
	
	$scope.CheckEndMonth1=function(){
		
			if(!$scope.EndMonth1){
		$scope.Status12=0;
		$scope.Err12=0;
		$scope.Cross12=true;
		$scope.Tick12=false;
	} 
		else if(!$scope.EndYear1){
			$scope.Cross12=false;
			$scope.Tick12=false;
			$scope.Status12=1;
		$scope.Err12=1;
		}
	else{
		$scope.Status12=1;
		$scope.Err12=1;
		$scope.Tick12=true;
		$scope.Cross12=false;
	}
	};
		
	$scope.CheckEndYear1=function(){
		
			if(!$scope.EndYear1){
		$scope.Status13=0;
		$scope.Err13=0;
		$scope.Cross12=true;
		$scope.Tick12=false;
	} 
		else if(!$scope.EndMonth1){
			$scope.Cross12=false;
			$scope.Tick12=false;
			$scope.Status13=1;
		$scope.Err13=1;
		}
	else{
		$scope.Status13=1;
		$scope.Err13=1;
		$scope.Tick12=true;
		$scope.Cross12=false;
	}
	};
	
	$scope.CheckCompany2=function(){
		
	if(!$scope.CompanyName2){
		$scope.Status14=0;
		$scope.Err14=0;
		$scope.Cross14=true;
		$scope.Tick14=false;
	} 
	else{
		$scope.Status14=1;
		$scope.Err14=1;
		$scope.Tick14=true;
		$scope.Cross14=false;
	}
	};
	
	$scope.CheckJobTitle2=function(){
		
	if(!$scope.JobTitle2){
		$scope.Status15=0;
		$scope.Err15=0;
		$scope.Cross15=true;
		$scope.Tick15=false;
	} 
	else{
		$scope.Status15=1;
		$scope.Err15=1;
		$scope.Tick15=true;
		$scope.Cross15=false;
	}
	};
	
	$scope.CheckStartMonth2=function(){
		
			if(!$scope.StartMonth2){
		$scope.Status16=0;
		$scope.Err16=0;
		$scope.Cross16=true;
		$scope.Tick16=false;
	} 
		else if(!$scope.StartYear2){
			$scope.Cross16=false;
			$scope.Tick16=false;
			$scope.Status16=1;
		$scope.Err16=1;
		}
	else{
		$scope.Status16=1;
		$scope.Err16=1;
		$scope.Tick16=true;
		$scope.Cross16=false;
	}
	};
		
	$scope.CheckStartYear2=function(){
		
			if(!$scope.StartYear2){
		$scope.Status17=0;
		$scope.Err17=0;
		$scope.Cross16=true;
		$scope.Tick16=false;
	} 
		else if(!$scope.StartMonth2){
			$scope.Cross16=false;
			$scope.Tick16=false;
			$scope.Status17=1;
		$scope.Err17=1;
		}
	else{
		$scope.Status17=1;
		$scope.Err17=1;
		$scope.Tick16=true;
		$scope.Cross16=false;
	}
	};
		
	
	$scope.CheckEndMonth2=function(){
		
			if(!$scope.EndMonth2){
		$scope.Status18=0;
		$scope.Err18=0;
		$scope.Cross18=true;
		$scope.Tick18=false;
	} 
		else if(!$scope.EndYear2){
			$scope.Cross18=false;
			$scope.Tick18=false;
			$scope.Status18=1;
		$scope.Err18=1;
		}
	else{
		$scope.Status18=1;
		$scope.Err18=1;
		$scope.Tick18=true;
		$scope.Cross18=false;
	}
	};
		
	$scope.CheckEndYear2=function(){
		
			if(!$scope.EndYear2){
		$scope.Status19=0;
		$scope.Err19=0;
		$scope.Cross18=true;
		$scope.Tick18=false;
	} 
		else if(!$scope.EndMonth2){
			$scope.Cross18=false;
			$scope.Tick18=false;
			$scope.Status19=1;
		$scope.Err19=1;
		}
	else{
		$scope.Status19=1;
		$scope.Err19=1;
		$scope.Tick18=true;
		$scope.Cross18=false;
	}
	};
	
	$scope.CheckCompany3=function(){
		
	if(!$scope.CompanyName3){
		$scope.Status20=0;
		$scope.Err20=0;
		$scope.Cross20=true;
		$scope.Tick20=false;
	} 
	else{
		$scope.Status20=1;
		$scope.Err20=1;
		$scope.Tick20=true;
		$scope.Cross20=false;
	}
	};
	
	$scope.CheckJobTitle3=function(){
		
	if(!$scope.JobTitle3){
		$scope.Status21=0;
		$scope.Err21=0;
		$scope.Cross21=true;
		$scope.Tick21=false;
	} 
	else{
		$scope.Status21=1;
		$scope.Err21=1;
		$scope.Tick21=true;
		$scope.Cross21=false;
	}
	};
	
	$scope.CheckStartMonth3=function(){
		
			if(!$scope.StartMonth3){
		$scope.Status22=0;
		$scope.Err22=0;
		$scope.Cross22=true;
		$scope.Tick22=false;
	} 
		else if(!$scope.StartYear3){
			$scope.Cross22=false;
			$scope.Tick22=false;
			$scope.Status22=1;
		$scope.Err22=1;
		}
	else{
		$scope.Status22=1;
		$scope.Err22=1;
		$scope.Tick22=true;
		$scope.Cross22=false;
	}
	};
		
	$scope.CheckStartYear3=function(){
		
			if(!$scope.StartYear3){
		$scope.Status23=0;
		$scope.Err23=0;
		$scope.Cross22=true;
		$scope.Tick22=false;
	} 
		else if(!$scope.StartMonth3){
			$scope.Cross22=false;
			$scope.Tick22=false;
			$scope.Status23=1;
		$scope.Err23=1;
		}
	else{
		$scope.Status23=1;
		$scope.Err23=1;
		$scope.Tick22=true;
		$scope.Cross22=false;
	}
	};
		
	
	$scope.CheckEndMonth3=function(){
		
			if(!$scope.EndMonth3){
		$scope.Status24=0;
		$scope.Err24=0;
		$scope.Cross24=true;
		$scope.Tick24=false;
	} 
		else if(!$scope.EndYear3){
			$scope.Cross24=false;
			$scope.Tick24=false;
			$scope.Status24=1;
		$scope.Err24=1;
		}
	else{
		$scope.Status24=1;
		$scope.Err24=1;
		$scope.Tick24=true;
		$scope.Cross24=false;
	}
	};
		
	$scope.CheckEndYear3=function(){
		
			if(!$scope.EndYear3){
		$scope.Status25=0;
		$scope.Err25=0;
		$scope.Cross24=true;
		$scope.Tick24=false;
	} 
		else if(!$scope.EndMonth3){
			$scope.Cross24=false;
			$scope.Tick24=false;
			$scope.Status25=1;
		$scope.Err25=1;
		}
	else{
		$scope.Status25=1;
		$scope.Err25=1;
		$scope.Tick24=true;
		$scope.Cross24=false;
	}
	};
	
	$scope.CheckInstitute1=function(){
		
	if(!$scope.Institute1){
		$scope.Status26=0;
		$scope.Err26=0;
		$scope.Cross26=true;
		$scope.Tick26=false;
	} 
	else{
		$scope.Status26=1;
		$scope.Err26=1;
		$scope.Tick26=true;
		$scope.Cross26=false;
	}
	};
	
	$scope.CheckCourse1=function(){
		
	if(!$scope.Course1){
		$scope.Status27=0;
		$scope.Err27=0;
		$scope.Cross27=true;
		$scope.Tick27=false;
	} 
	else{
		$scope.Status27=1;
		$scope.Err27=1;
		$scope.Tick27=true;
		$scope.Cross27=false;
	}
	};
	
	$scope.CheckStartingYear1=function(){
		
	if(!$scope.StartingYear1){
		$scope.Status35=0;
		$scope.Err35=0;
		$scope.Cross35=true;
		$scope.Tick35=false;
	} 
	else{
		$scope.Status35=1;
		$scope.Err35=1;
		$scope.Tick35=true;
		$scope.Cross35=false;
	}
	};
	$scope.CheckPassingYear1=function(){
		
	if(!$scope.PassingYear1){
		$scope.Status28=0;
		$scope.Err28=0;
		$scope.Cross28=true;
		$scope.Tick28=false;
	} 
	else{
		$scope.Status28=1;
		$scope.Err28=1;
		$scope.Tick28=true;
		$scope.Cross28=false;
	}
	};
	
	$scope.CheckInstitute2=function(){
		
	if(!$scope.Institute2){
		$scope.Status29=0;
		$scope.Err29=0;
		$scope.Cross29=true;
		$scope.Tick29=false;
	} 
	else{
		$scope.Status29=1;
		$scope.Err29=1;
		$scope.Tick29=true;
		$scope.Cross29=false;
	}
	};
	
	$scope.CheckCourse2=function(){
		
	if(!$scope.Course2){
		$scope.Status30=0;
		$scope.Err30=0;
		$scope.Cross30=true;
		$scope.Tick30=false;
	} 
	else{
		$scope.Status30=1;
		$scope.Err30=1;
		$scope.Tick30=true;
		$scope.Cross30=false;
	}
	};
	$scope.CheckStartingYear2=function(){
		
	if(!$scope.StartingYear2){
		$scope.Status36=0;
		$scope.Err36=0;
		$scope.Cross36=true;
		$scope.Tick36=false;
	} 
	else{
		$scope.Status36=1;
		$scope.Err36=1;
		$scope.Tick36=true;
		$scope.Cross36=false;
	}
	};
	$scope.CheckPassingYear2=function(){
		
	if(!$scope.PassingYear2){
		$scope.Status31=0;
		$scope.Err31=0;
		$scope.Cross31=true;
		$scope.Tick31=false;
	} 
	else{
		$scope.Status31=1;
		$scope.Err31=1;
		$scope.Tick31=true;
		$scope.Cross31=false;
	}
	};
	
	$scope.CheckQualification=function(){
		
	if(!$scope.Qualification1){
		$scope.Status32=0;
		$scope.Err32=0;
		$scope.Cross32=true;
		$scope.Tick32=false;
	} 
	else{
		$scope.Status32=1;
		$scope.Err32=1;
		$scope.Tick32=true;
		$scope.Cross32=false;
	}
	};
	
	$scope.CheckInterest=function(){
		
	if(!$scope.Interest1){
		$scope.Status33=0;
		$scope.Err33=0;
		$scope.Cross33=true;
		$scope.Tick33=false;
	} 
	else{
		$scope.Status33=1;
		$scope.Err33=1;
		$scope.Tick33=true;
		$scope.Cross33=false;
	}
	};
	
	$scope.CheckReference=function(){
		
	if(!$scope.Reference1){
		$scope.Status34=0;
		$scope.Err34=0;
		$scope.Cross34=true;
		$scope.Tick34=false;
	} 
	else{
		$scope.Status34=1;
		$scope.Err34=1;
		$scope.Tick34=true;
		$scope.Cross34=false;
	}
	};
	
	
	//ng-submit
	$scope.Submit=function(){
		$scope.$storage.qwer=$scope.OtherInformation1;
		if(!$scope.Name || !$scope.Contact || !$scope.Email || !$scope.Address1 || !$scope.Intro || !$scope.Expertise || !$scope.Address2 || !$scope.Pin || !$scope.City || !$scope.State){
		$scope.BasicInformation=true;
			$scope.WorkExperience=false;
			$scope.Education=false;
			$scope.Qualification=false;
			$scope.Interest=false;
			$scope.Reference=false;
			alert("Please fill all the information");
	} 
		else if($scope.Status==0 || $scope.Statu1==0 || $scope.Status2==0 || $scope.Status3==0 || $scope.Status4==0 || $scope.Status5==0 || $scope.Status6==0 || $scope.Status7==0){
			$scope.BasicInformation=true;
			$scope.WorkExperience=false;
			$scope.Education=false;
			$scope.Qualification=false;
			$scope.Interest=false;
			$scope.Reference=false;
			alert("Please fill all the information");
		}
		else if(!$scope.CompanyName1 || !$scope.JobTitle1 || !$scope.StartMonth1 || !$scope.StartYear1 || !$scope.EndMonth1 || !$scope.EndYear1){
			
			$scope.BasicInformation=false;
			$scope.WorkExperience=true;
			$scope.Education=false;
			$scope.Qualification=false;
			$scope.Interest=false;
			$scope.Reference=false;
			alert("Please fill all the information");
		}
		else if(!$scope.Institute1 || !$scope.Course1 || !$scope.PassingYear1 || !$scope.StartingYear1 || !$scope.StartingYear2 || !$scope.Institute2 || !$scope.Course2 || !$scope.PassingYear2){
			
			$scope.BasicInformation=false;
			$scope.WorkExperience=false;
			$scope.Education=true;
			$scope.Qualification=false;
			$scope.Interest=false;
			$scope.Reference=false;
			alert("Please fill all the information");
		}
		else if(!$scope.Qualification1){
			$scope.BasicInformation=false;
			$scope.WorkExperience=false;
			$scope.Education=false;
			$scope.Qualification=true;
			$scope.Interest=false;
			$scope.Reference=false;
			alert("Please fill all the information");
		}
		else if(!$scope.Interest1){
			$scope.BasicInformation=false;
			$scope.WorkExperience=false;
			$scope.Education=false;
			$scope.Qualification=false;
			$scope.Interest=true;
			$scope.Reference=false;
			alert("Please fill all the information");
		}
		else if(!$scope.Reference1){
			$scope.BasicInformation=false;
			$scope.WorkExperience=false;
			$scope.Education=false;
			$scope.Qualification=false;
			$scope.Interest=false;
			$scope.Reference=true;
			alert("Please fill all the information");
		}
		else{
	
		$scope.$storage.Details={
			
			name:$scope.Name,
			email:$scope.Email,
			contact:$scope.Contact,
			address1:$scope.Address1,
			address2:$scope.Address2,
			pin:$scope.Pin,
			city:$scope.City,
			State:$scope.State,
			expertise:$scope.Expertise,
			intro:$scope.Intro,
			companyname1:$scope.CompanyName1,
			jobtitle1:$scope.JobTitle1,
			startmonth1:$scope.StartMonth1,
			startyear1:$scope.StartYear1,
			endmonth1:$scope.EndMonth1,
			endyear1:$scope.EndYear1,
			jobdescription1:$scope.JobDescription1,
			companyname2:$scope.CompanyName2,
			jobtitle2:$scope.JobTitle2,
			startmonth2:$scope.StartMonth2,
			startyear2:$scope.StartYear2,
			endmonth2:$scope.EndMonth2,
			endyear2:$scope.EndYear2,
			jobdescription2:$scope.JobDescription2,
			companyname3:$scope.CompanyName3,
			jobtitle3:$scope.JobTitle3,
			startmonth3:$scope.StartMonth3,
			startyear3:$scope.CheckStartYear3,
			endmonth3:$scope.EndMonth3,
			endyear3:$scope.EndYear3,
			jobdescription3:$scope.JobDescription3,
			institue1:$scope.Institute1,
			course1:$scope.Course1,
			startingyear1:$scope.StartingYear1,
			passingyear1:$scope.PassingYear1,
			otherinformation1:$scope.OtherInformation1,
			institue2:$scope.Institute2,
			course2:$scope.Course2,
			startingyear2:$scope.StartingYear2,
			passingyear2:$scope.PassingYear2,
			otherinformation2:$scope.OtherInformation2,
			qualification1:$scope.Qualification1,
			interest1:$scope.Interest1,
			reference1:$scope.Reference1
			
		};
		
		window.location.href = "cv.html";
		}
		$scope.$storage.qwer=$scope.OtherInformation1;
	};
});