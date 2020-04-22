package com.declanmurphy.dynamicscrm.web;

import com.declanmurphy.dynamicscrm.domain.ChartData;
import com.declanmurphy.dynamicscrm.domain.StackedChartData;
import com.declanmurphy.dynamicscrm.services.ChartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/dashboard")
@CrossOrigin
public class DashboardController {

    @Autowired
    private ChartService chartService;

    @GetMapping("/pieChart")
    public Iterable<ChartData> getClientNames(){
       return chartService.pieChartData();
    }

    @GetMapping("/open_opps")
    public int[] getOpenOpps(){
        int[] opps = {1, 2, 3, 4};
        return opps;
    }

    @GetMapping("/oppsByClient")
    public Iterable<ChartData> getOppsByClientData(){
        return chartService.oppsByClient();
    }

    @GetMapping("/valueByClient")
    public Iterable<ChartData> getValueByClientData(){
        return chartService.oppValueByClient();
    }

    @GetMapping("/outcomeByClient")
    public Iterable<StackedChartData> getOutcomeByClientData(){
        return chartService.outcomesByClient();
    }


}
