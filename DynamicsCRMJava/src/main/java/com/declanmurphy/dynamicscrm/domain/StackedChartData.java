package com.declanmurphy.dynamicscrm.domain;

public class StackedChartData implements Comparable<StackedChartData>{

    private String name;

    private Integer won;

    private Integer lost;

    private Integer withdrawn;

    private Integer count;

    public StackedChartData(String name, Integer won, Integer lost, Integer withdrawn, Integer count) {
        this.name = name;
        this.won = won;
        this.lost = lost;
        this.withdrawn = withdrawn;
        this.count = count;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getWon() {
        return won;
    }

    public void setWon(Integer won) {
        this.won = won;
    }

    public Integer getLost() {
        return lost;
    }

    public void setLost(Integer lost) {
        this.lost = lost;
    }

    public Integer getWithdrawn() {
        return withdrawn;
    }

    public void setWithdrawn(Integer withdrawn) {
        this.withdrawn = withdrawn;
    }

    public Integer getCount() {
        return count;
    }

    public void setCount(Integer count) {
        this.count = count;
    }

    @Override
    public int compareTo(StackedChartData o) {
        return this.getCount().compareTo(o.getCount());
    }
}
