package com.voxlogic.contentmgmt.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.voxlogic.contentmgmt.model.Data;
import com.voxlogic.contentmgmt.model.DataMessage;
import com.voxlogic.contentmgmt.services.DataCollectService;


@RestController
@RequestMapping("/content")
public class DataCollectController
{

	@Autowired 
	private DataCollectService dataCollectService;
	
	@RequestMapping( 
					method = RequestMethod.POST, 
					produces = "application/json",
					consumes = "application/json")
	public DataMessage populateContent(@RequestBody Data data)
	{
		return dataCollectService.populateData(data);
	}
	
	@RequestMapping( 
			method = RequestMethod.GET, 
			produces = "application/json")
	public String getContent()
	{
		return "{\"Status\":\"Success\"}";
	}
	
	
	
}
