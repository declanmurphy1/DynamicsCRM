package com.declanmurphy.dynamicscrm.domain;

public class ChartData implements Comparable<ChartData>{

    private String stage;

    private Integer count;

    public ChartData(String stage, int count) {
        this.stage = stage;
        this.count = count;
    }

    public String getStage() {
        return stage;
    }

    public void setStage(String stage) {
        this.stage = stage;
    }

    public Integer getCount() {
        return count;
    }

    public void setCount(Integer count) {
        this.count = count;
    }

    @Override
    public int compareTo(ChartData o) {
        return this.getCount().compareTo(o.getCount());
    }
}
